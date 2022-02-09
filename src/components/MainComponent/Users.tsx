import * as React from 'react';

import { withLoading } from './withLoading';

export type UserEntity = {
  firstName: string;
  lastName: string;
};

export type DumbUserTypes = {
  onClick: () => void;
  entity?: UserEntity;
};
export const DumbUser: React.FC<DumbUserTypes> = ({
  entity = {
    firstName: 'firstName',
    lastName: 'lastName',
  },
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      {entity.firstName} {entity.lastName}
    </button>
  );
};

export const ConnectedUser = withLoading(DumbUser);
