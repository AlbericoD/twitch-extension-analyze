import React, { FunctionComponent, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Basiclayout, GridContent, PageLoading } from './layout';
import { HashRouter, Route } from 'react-router-dom';
import { store } from './store';
import { withTracker } from './utils';
import './app.less';

const Upload = React.lazy(() => import('./containers/upload'));
const OverViewTab = React.lazy(() => import('./containers/overview'));
const MonetizationTab = React.lazy(() => import('./containers/monetization'));
const LiveActivedChannelsTab = React.lazy(() => import('./containers/live-activated-channels'));
const InteractionTab = React.lazy(() => import('./containers/interaction'));
const ManualBuildTab = React.lazy(() => import('./containers/manual-build-graph'));

const App: FunctionComponent = (): JSX.Element => (
  <Provider store={store}>
    <HashRouter basename='/'>
      <Basiclayout>
        <Suspense fallback={<PageLoading />}>
          <GridContent>
            <Route exact path='/' component={withTracker(Upload)} />
            <Route path='/overview' component={withTracker(OverViewTab)} />
            <Route path='/monetization' component={withTracker(MonetizationTab)} />
            <Route path='/iteraction' component={withTracker(InteractionTab)} />
            <Route path='/activated' component={withTracker(LiveActivedChannelsTab)} />
            <Route path='/build' component={withTracker(ManualBuildTab)} />
          </GridContent>
        </Suspense>
      </Basiclayout>
    </HashRouter>
  </Provider>
);

export default App;
