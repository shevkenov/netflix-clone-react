import { Signin, Home, Signup, Browse } from "./pages/";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
