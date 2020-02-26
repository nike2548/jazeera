import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import NavBar from '../components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Test from '../../modules/dashboard/components/test';
import { useState } from 'react';

const AdminLayout = () => {
  const [state, setState] = useState({ lang: 'en' });
  return (
    <Container maxWidth={false}>
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
                <Route path="/layout1/test" component={Test} />
              </Switch>
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminLayout;
