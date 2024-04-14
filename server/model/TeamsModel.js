const mongoose = require('mongoose');
const User = require('./UserModels');

const teamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    lead_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    co_lead_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Make it optional or required based on your needs
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    logo: {
        type: String,
        required: false 
    },
    club_name: {
        type: String,
        required: true
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
