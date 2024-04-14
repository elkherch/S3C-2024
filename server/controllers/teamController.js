const teamService = require('../services/teamService');

async function getAllTeams(req, res) {
  try {
    const teams = await teamService.getAllTeams();
    res.json(teams);
  } catch (error) {
    console.error('Error fetching all teams:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createTeams(req, res) {
  try {
    const teamsData = req.body;
    
    const team = await teamService.createTeams(teamsData);
    res.status(201).json(team);
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getTeamsById(req, res) {
  const teamId = req.params.id;
  try {
    const team = await teamService.getTeamsById(teamId);
    res.json(team);
  } catch (error) {
    console.error(`Error fetching team with ID ${teamId}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateTeams(req, res) {
  const teamId = req.params.id;
  const teamsData = req.body;
  try {
    const team = await teamService.updateTeams(teamId, teamsData);
    res.json(team);
  } catch (error) {
    console.error(`Error updating team with ID ${teamId}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteTeams(req, res) {
  const teamId = req.params.id;
  try {
    const team = await teamService.deleteTeams(teamId);
    res.json({ message: 'Team deleted successfully', team });
  } catch (error) {
    console.error(`Error deleting team with ID ${teamId}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllTeams,
  createTeams,
  getTeamsById,
  updateTeams,
  deleteTeams
};
