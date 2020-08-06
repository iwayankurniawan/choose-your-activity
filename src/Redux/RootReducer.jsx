import {createStore, combineReducers,applyMiddleware} from 'redux';
import { CallApi } from './CallApi';
import { Toogle } from './Toogle';
import { AddActivityToStatistic } from './AddActivityToStatistic';
import thunk from 'redux-thunk';

export const RootReducer = () => {
    const store = createStore(
      combineReducers({
          callApi: CallApi,
          toogle: Toogle,
          addAction : AddActivityToStatistic
      }),
      applyMiddleware(thunk)
    );

    return store;
}
