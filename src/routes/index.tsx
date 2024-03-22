import React, { useEffect } from 'react';
import PublicNavigator from './Public';
import AuthenticatedNavigator from './Authenticated';

function Routes() {
  const auth = true;

  return auth ? <AuthenticatedNavigator /> : <PublicNavigator />;
}

export default Routes;
