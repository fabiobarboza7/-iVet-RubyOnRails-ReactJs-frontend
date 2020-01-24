import axios from './api';

export const userRegistration = async userData => {
  try {
    const { data } = await axios.post('/registrations', userData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
