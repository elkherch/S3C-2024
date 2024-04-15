const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/connect.js");
const MongoStore = require("connect-mongo");
const router = require("./routes/router.js");
const googleAuth = require("./routes/router")
const crypto = require('crypto');
const mongoose = require('mongoose');
const passport = require("passport")

dotenv.config();

// Connexion à la base de données MongoDB
connectToDatabase();

const app = express();

const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGODB_URI,
  mongooseConnection: mongoose.connection,
  collection: 'sessions',
});

app.use(cors({
    credentials: true,
    origin: ['http://localhost:5000','http://localhost:3002', 'http://localhost:3001']
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

app.use(passport.initialize());
require("./auth/google-auth")(passport);

app.use("/", googleAuth)

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
