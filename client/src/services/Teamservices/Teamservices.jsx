import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}teams/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
};
