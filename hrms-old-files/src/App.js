// Import React and Component
import React, { Component, Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { cyan, green } from '@material-ui/core/colors';

import CssBaseline from '@material-ui/core/CssBaseline';
// import './styles.scss';
const Dashboard = lazy(() => import('./modules/dashboard'));
const NotFound = lazy(() => import('./Common/components/NotFound/NotFound'));
const Auth = lazy(() => import('./modules/auth'));
const Layout = lazy(() => import('./Common/layouts/Layout'));

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
          <section className="page_main_content_section">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/layout" component={Layout} />
                <Route path="/ar/layout" component={Layout} />
                <Route exact path="/" component={Auth} />
                <Route path="/auth" component={Auth} />
                <Route path="/dashboard" component={Dashboard} />
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
