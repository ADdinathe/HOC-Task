import * as React from 'react';

import { DumbUserTypes, UserEntity } from './Users';

type MyComponentTypes = {
  onClick: () => void;
  entity?: UserEntity;
  loadEntity?: () => Promise<UserEntity>;
};

export const loadFakeEntity = async (): Promise<UserEntity> => {
  await new Promise((res, rej) => {
    // setTimeout(rej, 1000); // закоментить чтобы увидеть данные пользователя
    setTimeout(res, 1000);
  });

  return {
    firstName: 'firstName',
    lastName: 'lastName',
  };
};

const Loader = () => <div>loading</div>;

const Error = () => {
  return <div>error</div>;
};

export const withLoading = (DumbUser: React.FC<DumbUserTypes>) => {
  const MyComponent: React.FC<MyComponentTypes> = (props: DumbUserTypes) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [entity, setEntity] = React.useState<UserEntity>();

    React.useEffect(() => {
      setLoading(true);
      if (loadFakeEntity) {
        loadFakeEntity().then(
          (res) => {
            setEntity(res);
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            setError(true);
            console.log(error);
          }
        );
      }
    }, []);
    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {!loading && !error && <DumbUser {...props} entity={entity} />}
      </>
    );
  };

  return MyComponent;
};
