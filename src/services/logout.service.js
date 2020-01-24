import axios from './api';

export const logout = async () => {
  try {
    const { data } = await axios.delete('/logout', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
