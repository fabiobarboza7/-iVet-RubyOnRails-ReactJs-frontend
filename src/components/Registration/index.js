import React, { useContext } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { userRegistration } from '../../services/registrations.service';
import { Store } from '../../store';
import { userStatus } from '../../store/modules/users/actions';
import schema from './schema';
// import { Container } from './styles';

export default function Registration() {
  const [, dispatch] = useContext(Store);

  async function handleSubmit(data) {
    const response = await userRegistration({ user: { ...data } });
    dispatch(userStatus({ data: response }));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" />
      <button type="submit">send</button>
    </Form>
  );
}
