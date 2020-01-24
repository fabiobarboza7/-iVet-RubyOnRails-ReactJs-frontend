const combineReducers = reducers => (state, action) => {
  // key => properties name of reducers
  // [left - right]
  return Object.keys(reducers).reduce((result, key) => {
    // the property [left - right]
    // eq state of redurecer[left - right]
    // then invoke fn
    result[key] = reducers[key](state[key], action);

    return result;
  }, {});
};

export default combineReducers;
