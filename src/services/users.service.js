import axios from './api';

export const getUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};
