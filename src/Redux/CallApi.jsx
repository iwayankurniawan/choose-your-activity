import * as ActionTypes from './ActionTypes';

export const CallApi = (state  = { isLoading: false,errMess: null,activity:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_ACTIVITY:
          action.payload.type = action.payload.type[0].toUpperCase() +  action.payload.type.slice(1);
          return {...state, isLoading: false, errMess: null, activity: action.payload};

        case ActionTypes.LOADING_GET_ACTIVITY:
          return {...state, isLoading: true, errMess: null, activity: []}

        case ActionTypes.FAILED_GET_ACTIVITY:
          return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
