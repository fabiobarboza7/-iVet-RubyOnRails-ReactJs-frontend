import { toast } from 'react-toastify';

import axios from './api';

export const userLogin = async userData => {
  try {
    const { data } = await axios.post('/sessions', userData, {
      withCredentials: true,
    });
    toast.success('Welcome');

    return data;
  } catch (error) {
    console.log(error.response);
    toast.error(error.response.data.error);
    return error;
  }
};
