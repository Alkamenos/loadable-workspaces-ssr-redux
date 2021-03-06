import { State } from "./rootStore";
import { RouterState } from "connected-react-router";

export const getInitialState = (pathname: string = "/"): State => {
  return {
    auth: { loggedIn: false },
    leaderboard: {},
    router: {
      location: {pathname, search: '', hash: '', key: ''},
      action: 'POP',
    } as unknown as RouterState,
  };
};
