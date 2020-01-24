import axios from './api';

export const getAnimals = async () => {
  try {
    const { data } = await axios.get('/animals', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
