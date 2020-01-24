export const userStatus = ({ data }) => ({
  type: 'USER_STATUS',
  data,
});

export const userLoggedIn = ({ logged_in }) => ({
  type: 'USER_LOGGED_IN',
  logged_in,
});

export const userLoggedOut = ({ logged_out }) => ({
  type: 'USER_LOGGED_OUT',
  logged_out,
});
