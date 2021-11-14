import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LoadableTopPage,
  LoadableNotFoundPage,
} from './routes';
import { App } from '../components/App';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/">
        <LoadableTopPage />
      </Route>
      <Route>
        <LoadableNotFoundPage />
      </Route>
    </Switch>
  </App>
);
