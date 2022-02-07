import * as React from 'react';

type Props = {
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
};

const MyButton: React.FC<Props> = ({ children, onClick }: Props) => (
  <button onClick={onClick}>{children}</button>
);

export default React.memo(MyButton);
