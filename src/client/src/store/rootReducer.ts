import { CombinedState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { State } from "./rootStore";

import authReducer from "./slices/authSlice";
import leaderboardReducer from "./slices/leaderboardSlice";

export default (history: History) =>{
  return combineReducers({
    auth: authReducer,
    leaderboard: leaderboardReducer,
    router: connectRouter(history),
  });
}

