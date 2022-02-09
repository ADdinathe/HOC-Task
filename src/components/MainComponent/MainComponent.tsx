import * as React from 'react';

import { ConnectedUser } from './Users';
import { loadFakeEntity } from './withLoading';

const MainComponent: React.FC = () => {
  return (
    <ConnectedUser onClick={() => console.log('click on button')} loadEntity={loadFakeEntity} />
  );
};

export default React.memo(MainComponent);
