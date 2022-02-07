import styled, { css } from 'styled-components';

export const MainBody = styled.div`
  width: 100%;
  height: 100ch;
  color: white;
  background: #9f63e8;

  &:hover {
    transition: 0.8s;
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    background: #9f63e8;
  }
`;
