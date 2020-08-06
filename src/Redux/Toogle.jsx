import * as ActionTypes from './ActionTypes';

export const Toogle = (state = {toogleActivate:false}, action) => {
  switch (action.type) {
    case ActionTypes.TOOGLE_ACTIVATE:
      return {...state, toogleActivate:!action.payload};

    default:
      return state;
    }
};
