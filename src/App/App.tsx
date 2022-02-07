import * as React from 'react';
import styled from 'styled-components';

import MainSil from '../components/MainSil';
import 'styles/styles.scss';
const MainBody = styled.div`
  width: 100%;
  height: 100px;
`;
const App: React.FC = () => (
  <MainBody>
    <MainSil />
  </MainBody>
);

export default App;
