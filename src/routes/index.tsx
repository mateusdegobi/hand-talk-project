import React from 'react';

import AuthenticatedNavigator from './Authenticated';
import PublicNavigator from './Public';

function Routes() {
  const auth = false;

  return auth ? <AuthenticatedNavigator /> : <PublicNavigator />;
}

export default Routes;
