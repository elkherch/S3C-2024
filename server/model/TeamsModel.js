const mongoose = require('mongoose');
const emailValidator = require('validator').isEmail;

const teamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    leader_email: {
        type: String,
        required: true,
        validate: [emailValidator, 'Please fill a valid email address']
    },
    co_leader_email: {
        type: String,
        required: false,
        validate: [emailValidator, 'Please fill a valid email address']
    },
    member_emails: [{
        type: String,
        validate: [emailValidator, 'Please fill a valid email address']
    }],
    slogan: {
        type: String,
        required: false
    },
    // logo: {
    //     type: String,
    //     required: false 
    // }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
