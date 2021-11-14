import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory, createMemoryHistory } from "history";
import createRootReducer from "./rootReducer";
import { RouterState } from "connected-react-router";
import thunk from "redux-thunk";

export interface State {
  auth: {
    loggedIn: Boolean;
  };
  leaderboard: {};
  router: RouterState;
}

export const isServer = !(typeof window !== "undefined" && window.document && window.document.createElement);
// @ts-ignore
export function configureStore(initialState: State, url = "/"):any {
  const history = isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory();
  // @ts-ignore
  const composeEnhancers = !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // @ts-ignore
  const store = createStore(createRootReducer(history), initialState,  composeEnhancers(applyMiddleware(thunk)))
  return { store, history };
}
