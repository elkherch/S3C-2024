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
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
