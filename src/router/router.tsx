import { lazy, Suspense } from 'react';
import { Router, Redirect, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Articale = lazy(() => import('../view/articale'));
const ArticaleDetail = lazy(() => import('../view/articale-detail'));

export default function AppRouter() {
  const loader = <ReactLoading type={'bubbles'} color="#fff" />;
  const listRouter = [
    {
      path: '/articale',
      component: Articale,
    },
    {
      path: '/articale/:id',
      component: ArticaleDetail,
    },
  ];
  return (
    <Router history={history}>
      {listRouter.map((item, idx) => {
        return (
          <Suspense fallback={loader} key={item.path + idx}>
            <Route exact path={item.path} component={item.component} />
          </Suspense>
        );
      })}
      <Route exact path="/" render={() => <Redirect to="/articale" />} />
    </Router>
  );
}
