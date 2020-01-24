import axios from './api';

export const checkLoginStatus = async () => {
  try {
    const { data } = await axios.get('/logged_in', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
