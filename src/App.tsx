import React, { FunctionComponent, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Basiclayout, GridContent, PageLoading } from './layout';
import { HashRouter, Route } from 'react-router-dom';
import { store } from './store';
import './app.less';

const Upload = React.lazy(() => import('./containers/upload'));
const OverViewTab = React.lazy(() => import('./containers/overview'));
const MonetizationTab = React.lazy(() => import('./containers/monetization'));
const LiveActivedChannelsTab = React.lazy(() => import('./containers/live-activated-channels'));
const InteractionTab = React.lazy(() => import('./containers/interaction'));

const App: FunctionComponent = (): JSX.Element => (
  <Provider store={store}>
    <HashRouter basename='/'>
      <Basiclayout>
        <Suspense fallback={<PageLoading />}>
          <GridContent>
            <Route exact path='/' component={Upload} />
            <Route path='/overview' component={OverViewTab} />
            <Route path='/installations' component={() => <h1>installations</h1>} />
            <Route path='/monetization' component={MonetizationTab} />
            <Route path='/iteraction' component={InteractionTab} />
            <Route path='/activated' component={LiveActivedChannelsTab} />
          </GridContent>
        </Suspense>
      </Basiclayout>
    </HashRouter>
  </Provider>
);

export default App;
