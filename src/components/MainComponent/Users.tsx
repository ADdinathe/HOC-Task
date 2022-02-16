import * as React from 'react';

import { withLoading } from './withLoading';

export type UserEntity = {
  firstName: string;
  lastName: string;
};

export type DumbUserProps = {
  onClick: () => void;
  entity?: UserEntity | null;
};

export const DumbUser: React.FC<DumbUserProps> = ({
  onClick,
  entity = {
    firstName: 'firstName',
    lastName: 'lastName',
  },
}) => {
  if (!entity) {
    return null;
  }

  return (
    <button onClick={onClick}>
      {entity.firstName} {entity.lastName}
    </button>
  );
};

export const ConnectedUser = withLoading(DumbUser);
