import { combineReducers } from 'redux';
import {
  reducer as pagesReducer,
  initialState as pagesInitialState,
  State as PagesState,
} from './pages';


export type State = {
  pages: PagesState;
};

export const initialState = {
  pages: pagesInitialState,
};

export const rootReducer = combineReducers({
  pages: pagesReducer,
});
