import React, { useContext } from 'react';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';
import { userLogin } from '../../services/sessions.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';

export default function Login() {
  const [, dispatch] = useContext(Store);
  async function handleSubmit(data) {
    const response = await userLogin({ user: { ...data } });
    dispatch(userStatus({ data: response }));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" />
      <button type="submit">login</button>
    </Form>
  );
}
