import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "redux-logger/src";
import rootReducer from "./rootReducer";
import initialState from "./initialState";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware, logger)
);

const store = createStore(rootReducer, initialState, composeEnhancers);

sagaMiddleware.run(rootSaga);
export default store;
