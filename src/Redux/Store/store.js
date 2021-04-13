import {applyMiddleware, combineReducers, createStore} from 'redux';
import addBillReducer from "../Reducer/addBillReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'

const middlewares = [];
middlewares.push(thunk);

export const store = createStore(
    combineReducers({
      addBillReducer
    }),
    composeWithDevTools(applyMiddleware(...middlewares)));
export default store;

export function makeActionCreator(typeName, payload) {
  return {type: typeName, payload};
}
