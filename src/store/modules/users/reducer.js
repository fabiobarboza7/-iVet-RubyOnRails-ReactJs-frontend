const INITIAL_STATE = { user: { logged_in: false } };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_STATUS':
      return action.data;
    case 'USER_LOGGED_IN':
      return { ...state, logged_in: action.logged_in };
    case 'USER_LOGGED_OUT':
      console.log(action);
      return { logged_in: !action.logged_out };
    default:
      return state;
  }
};
