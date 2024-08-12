import axios from 'axios';

const API_URL = 'https://capston-project-tacite243.onrender.com/api/users';

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error: ', error);
    throw error;
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (err) {
    console.error('Login error: ', err);
    throw err;
  }
};

export { register, login };
