import axios from './api';

export const userLogin = async userData => {
  try {
    const { data } = await axios.post('/sessions', userData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
