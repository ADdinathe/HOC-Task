import * as React from 'react';

type UserEntity = {
  firstName: string;
  lastName: string;
};

type DumbUserTypes = {
  onClick: () => void;
  entity: UserEntity;
};

const DumbUser: React.FC<DumbUserTypes> = ({ entity, onClick }) => {
  return (
    <button onClick={onClick}>
      {entity.firstName}
      {entity.lastName}
    </button>
  );
};

const loadFakeEntity = async (): Promise<UserEntity> => {
  await new Promise((res, rej) => {
    {
      setTimeout(rej, 1000);
      setTimeout(res, 1000);
    }
  });

  return {
    firstName: '-_',
    lastName: '_-',
  };
};
const Loader = () => {
  return <div>loading</div>;
};

const Error = () => {
  return <div>error</div>;
};

type MyComponent = {
  onClick: () => void;
  entity: UserEntity;
  loadEntity?: () => Promise<UserEntity>;
};

const withLoading = (DumbUser: React.FC<DumbUserTypes>) => {
  const MyComponent: React.FC<MyComponent> = (props: DumbUserTypes) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);
    const [entity, setEntity] = React.useState<UserEntity>(props.entity);

    React.useEffect(() => {
      setLoading(true);
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

const ConnectedUser = withLoading(DumbUser);

const MainSil = () => {
  return (
    <ConnectedUser
      onClick={() => console.log('sadf')}
      loadEntity={loadFakeEntity}
      entity={{
        firstName: 'default',
        lastName: '',
      }}
    />
  );
};

export default React.memo(MainSil);
