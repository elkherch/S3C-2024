const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require("../model/UserModels");

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        UserModel.findById(id)
            .then(user => {
                done(null, user);
            })
            .catch(err => {
                done(err, null);
            });
    });

    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            console.log(profile);
            UserModel.findOne({ googleId: profile.id })
                .then(user => {
                    if (user){
                        const updateUser = {
                            username : profile.displayName,
                            email: profile.email[0].value,
                            //secret: accessToken
                        }
                        UserModel.findOneAndUpdate(
                            {_id: user._id},
                        {$set: updateUser},
                            {new: true}
                        )
                        return cb(null, user);
                    }else {
                        const newUser = new UserModel({
                            username : profile.displayName,
                            email: profile.emails[0].value,
                            //secret: accessToken
                        });
                        newUser.save().then((result) => {
                            return cb(null, user);
                        });

                    }
                })
                .catch(err => {
                    return cb(err, null);
                });
        }));
};
