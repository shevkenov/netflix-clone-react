import React from 'react';
import { Route, Redirect} from 'react-router-dom';

export function IsUserRedirect({ children, user, loggedInPath, ...restProps }) {
  return (
    <Route {...restProps} render={() => {
        if(!user){
            return children
        }

        if(user){
            return <Redirect to={loggedInPath}/>
        }

        return null
    }}/>
  ) 
}

export function ProtectedRoute({ children, user, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({location}) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'login',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}