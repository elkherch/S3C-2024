const Teams = require('../model/TeamsModel');

class TeamService {
    async createTeams(teamData) {
        try {
            const teams = await Teams.create(teamData);
            return teams;
        } catch (error) {
            console.error('Erreur lors de la création de l\'équipe :', error);
            throw error;
        }
    }

    async getAllTeams() {
        try {
            const teams = await Teams.findAll();
            return teams;
        } catch (error) {
            console.error('Erreur :', error);
            throw error;
        }
    }

    async getTeamById(teamId) {
        try {
            const team = await Teams.findByPk(teamId);
            if (!team) {
                throw new Error('Équipe non trouvée');
            }
            return team;
        } catch (error) {
            console.error(`Erreur ${teamId} :`, error);
            throw error;
        }
    }

    async updateTeam(teamId, teamData) {
        try {
            const team = await Teams.findByPk(teamId);
            if (!team) {
                throw new Error('Équipe non trouvée');
            }
            await team.update(teamData);
            return team;
        } catch (error) {
            console.error(`Erreur ${teamId} :`, error);
            throw error;
        }
    }

    async deleteTeam(teamId) {
        try {
            const team = await Teams.findByPk(teamId);
            if (!team) {
                throw new Error('Équipe non trouvée');
            }
            await team.destroy();
            return team;
        } catch (error) {
            console.error(`Erreur ${teamId} :`, error);
            throw error;
        }
    }
}

module.exports = new TeamService();
