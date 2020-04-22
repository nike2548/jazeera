import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("./components/dashboard"));
export default () => (
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/dashboard" component={Dashboard}></Route>
    </Suspense>
  </Switch>
);
