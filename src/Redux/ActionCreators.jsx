import * as ActionTypes from './ActionTypes';

export const fetchActivity = () => (dispatch) => {
  dispatch(activityLoading(true));
  return fetch("http://www.boredapi.com/api/activity/").then(response => {
    if (response.ok) {
      return response;
    } else {
      let error = new Error('Error ' + response.status + ": " + response.statusText);
      error.response = response;
      throw error;
    }
  }, error => {
    let errmess = new Error(error.message);
    throw errmess;
  })
  .then(response => response.json())
  .then(activity => dispatch(getActivity(activity)))
  .catch(error => dispatch(activityFailed(error.message)));
}

export const activityLoading = () => ({
    type: ActionTypes.LOADING_GET_ACTIVITY
});

export const activityFailed = (errmess) => ({
    type: ActionTypes.FAILED_GET_ACTIVITY,
    payload: errmess
});

export const getActivity = (activity) => ({
    type: ActionTypes.GET_ACTIVITY,
    payload: activity
});

export const toogleActivate = (toogle) => ({
    type: ActionTypes.TOOGLE_ACTIVATE,
    payload: toogle
});

export const addActivityForStatistic = (activity) => ({
    type: ActionTypes.ADD_CHOSEN_ACTIVITY,
    payload: activity
});
