const mongoose = require('mongoose');
const User = require('./UserModels'); // Assurez-vous d'importer correctement votre modèle d'utilisateur

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    organizer_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
