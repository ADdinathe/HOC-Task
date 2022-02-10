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
  // непонятно почему ругается на то что entity possibly could be null
  if (entity) {
    return (
      <button onClick={onClick}>
        {entity.firstName} {entity.lastName}
      </button>
    );
  }
  return <button onClick={onClick}>firstName lastName</button>;
};

export const ConnectedUser = withLoading(DumbUser);
