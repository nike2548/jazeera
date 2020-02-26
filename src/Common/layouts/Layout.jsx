import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import NavBar from '../components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Dashboard from '../../modules/dashboard/components/dashboard';
import { useState } from 'react';

const Layout = () => {
  const [state, setState] = useState({ lang: 'en' });
  return (
    <Container
      className={
        state.lang === 'en' ? 'main-container-en' : 'main-container-ar'
      }
      maxWidth={false}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>
            <NavBar
              lang={state.lang}
              changeLang={() => {
                console.log(state);
                setState(state.lang === 'en' ? { lang: 'ar' } : { lang: 'en' });
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/layout/dashboard" component={Dashboard} />
              </Switch>
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
