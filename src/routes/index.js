import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '~/pages/Main';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}
