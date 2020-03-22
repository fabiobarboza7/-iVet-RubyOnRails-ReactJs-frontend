import React, { useContext } from 'react';

import { userLogin } from '../../services/sessions.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import schema from './schema';
import {
  Container,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginDogIcon,
  LoginButtonName,
} from './styles';

export default function Login() {
  const [, dispatch] = useContext(Store);
  async function handleSubmit(data) {
    const response = await userLogin({ user: { ...data } });
    dispatch(userStatus({ data: response }));
  }

  return (
    <Container>
      <LoginForm schema={schema} onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          name="email"
          placeholder="...your email"
          required
        />
        <LoginInput
          type="password"
          name="password"
          placeholder="...your password"
          required
        />

        <LoginButton type="submit">
          <LoginButtonName>
            Sign In
            <LoginDogIcon />
          </LoginButtonName>
        </LoginButton>
      </LoginForm>
    </Container>
  );
}
