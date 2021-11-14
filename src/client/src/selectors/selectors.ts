import { State } from '../reducers';

export const getEnv = (state: State) => state.pages.env;
export const getBaseUrl = (state: State) => state.pages.baseUrl;
