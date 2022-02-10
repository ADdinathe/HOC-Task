import * as React from 'react';

import { DumbUserProps, UserEntity } from './Users';

interface ILoadableComponentProps extends DumbUserProps {
  loadEntity?: () => Promise<UserEntity>;
}

export const loadFakeEntity = async (): Promise<UserEntity> => {
  await new Promise((res, rej) => {
    // setTimeout(rej, 1000); // закоментить чтобы увидеть данные пользователя
    setTimeout(res, 1000);
  });

  return {
    firstName: 'Иван',
    lastName: 'Иванов',
  };
};

const Loader = () => <div>loading</div>;

const Error = () => {
  return <div>error</div>;
};

export const withLoading = (
  DumbUser: React.FC<DumbUserProps>
): React.FC<ILoadableComponentProps> => {
  return (props: DumbUserProps) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [entity, setEntity] = React.useState<UserEntity | null>(null);

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
        return;
      }
      setError(true);
    }, []);

    return (
      <>
        {error && <Error />}
        {loading && <Loader />}
        {!loading && !error && <DumbUser {...props} entity={entity} />}
      </>
    );
  };
};
