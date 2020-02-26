import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const SignIn = lazy(() => import('./components/sign-in'));
export default () => (
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/auth/login" component={SignIn}></Route>
    </Suspense>
  </Switch>
);
