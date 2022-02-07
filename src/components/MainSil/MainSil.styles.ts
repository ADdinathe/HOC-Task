import styled, { css } from 'styled-components';

export const MainWordWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainWord = styled.div`
  margin: 100px auto 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Fira Sans', serif;
  font-weight: bold;
  font-size: 30px;
`;

export const MainInputWrapper = styled.div`
  margin: 150px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainInput = styled.input`
  width: 300px;
  margin: 0 auto 30px;
  display: inline-block;
  border: 1px solid #a267ea;
  box-sizing: border-box;
  border-radius: 20px;
  background: #5e19b3;
  padding-left: 12px;

  font-family: 'Fira Sans', serif;
  font-weight: bold;
  font-size: 24px;

  line-height: 40px;
  letter-spacing: 0;
  text-align: left;
  align-items: center;
  outline: none;

  &:focus {
    //transition: 0.8s;
    border: 1px solid #a267ea;
    background: #611eb4;
    color: white;
  }
`;
