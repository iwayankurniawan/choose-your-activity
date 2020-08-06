import * as ActionTypes from './ActionTypes';

export const AddActivityToStatistic = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_CHOSEN_ACTIVITY:
        let newArray = state.slice();
        newArray.splice(state.length, 0, action.payload);
        return newArray;

    default:
      return state;
    }
};
