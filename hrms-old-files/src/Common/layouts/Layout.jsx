import React, { Suspense } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import NavBar from '../components/NavBar/NavBar';
import Dashboard from '../../modules/dashboard/components/dashboard';
import { useState } from 'react';
import '../../assets/styles/common.scss';
const Layout = () => {
  const history = useHistory();

  const [, language] = history.location.pathname.split('/');
  const lang = language === 'ar' ? 'ar' : 'en';
  const [state, setState] = useState({ lang });

  return (
    <div
      className={classNames(
        'page_layout_container theme-white',
        state.lang === 'en' ? 'main-container-en' : 'oriental-rtl'
      )}
    >
      <header className="page_main_header">
        <NavBar
          lang={state.lang}
          changeLang={() => {
            if (state.lang === 'ar') {
              history.push(history.location.pathname.replace('/ar', ''));
            } else {
              history.push(`/ar${history.location.pathname}`);
            }
            setState(state.lang === 'en' ? { lang: 'ar' } : { lang: 'en' });
          }}
        />
      </header>
      <div className="page_main_inner_section">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/layout/dashboard" component={Dashboard} />
            <Route path="/ar/layout/dashboard" component={Dashboard} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
