import { useAuth } from '@src/hooks/';
import React from 'react';

import AuthenticatedNavigator from './Authenticated';
import PublicNavigator from './Public';

function Routes() {
  const { isAuth } = useAuth();
  return isAuth ? <AuthenticatedNavigator /> : <PublicNavigator />;
}

export default Routes;
