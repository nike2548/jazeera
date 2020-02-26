// Import React and Component
import React, { Component, Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { cyan, green } from '@material-ui/core/colors';

import CssBaseline from "@material-ui/core/CssBaseline";
import { CreateOwnPassword } from "./modules/auth/components/create-own-password";
import { ResetPasswordRequest } from "./modules/auth/components/reset-password-request";

const Dashboard = lazy(() => import("./modules/dashboard"));
const NotFound = lazy(() => import("./Common/components/NotFound/NotFound"));
const Auth = lazy(() => import("./modules/auth"));
const ResetUpdatePassword = lazy(() => import("./modules/auth/components/reset-update-new-password"));
const Layout = lazy(() => import('./Common/layouts/Layout'));
const AdminLayout = lazy(() => import('./Common/layouts/AdminLayout'));

const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: green
  },
  status: {
    danger: 'orange'
  },
  direction: 'rtl'
});

class App extends Component {
  render() {
    return (

      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          {/* <RootHeader> </RootHeader> */}
          <section className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/layout" component={Layout} />
                <Route path="/layout1" component={AdminLayout} />
                <Route exact path="/" component={Auth} />
                <Route path="/auth" component={Auth} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create-own-password" component={CreateOwnPassword} />
                <Route path="/reset-password-request" component={ResetPasswordRequest} />
                <Route path="/reset-update-password" component={ResetUpdatePassword} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </section>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
