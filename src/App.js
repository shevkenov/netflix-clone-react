import { Signin, Home, Signup, Browse } from "./pages/";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useAuth } from './hooks/'
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import * as ROUTES from './constants/routes';

function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          path={ROUTES.LOGIN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute
          path={ROUTES.BROWSE}
          user={user}
        >
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          path={ROUTES.HOME}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
