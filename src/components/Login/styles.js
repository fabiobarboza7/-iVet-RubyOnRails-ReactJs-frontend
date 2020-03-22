import { FaDog } from 'react-icons/fa';

import { Form, Input } from '@rocketseat/unform';
import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  padding: 60px 20px 60px 20px;
  background-color: #ffe66d;
  border-radius: 5px;
`;

export const LoginForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled(Input)`
  width: 75%;
  background-color: transparent;
  font-size: 20px;
  height: 60px;
  padding-left: 5px;
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: #ff6b6b;
  color: #ff6b6b;

  &::placeholder {
    color: #ff6b6b;
  }
`;

export const LoginButton = styled.button`
  position: relative;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
  background-color: #ff6b6b;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: transparent;
  transition: 1s;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    letter-spacing: 1px;
  }
`;

export const LoginButtonName = styled.p``;

export const LoginDogIcon = styled(FaDog).attrs({
  size: 20,
})`
  margin-left: 10px;
`;
