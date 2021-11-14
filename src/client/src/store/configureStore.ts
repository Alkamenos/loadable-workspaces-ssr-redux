import {createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {rootReducer} from '../reducers';

// export const history = window && document ? createBrowserHistory() : createMemoryHistory();

export const configureStore = (
  preloadedState: Record<string, any> = {},
): {
  store: Store;
} => {

  const store = createStore(rootReducer, preloadedState, composeWithDevTools());

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', async () => {
      const {rootReducer} = await import(/* webpackMode: "eager" */ '../reducers');

      store.replaceReducer(rootReducer);
    });
  }

  return {store};
};
