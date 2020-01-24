import React, { useContext } from 'react';

import { logout } from '~/services/logout.service';
import { Store } from '~/store';
import { userLoggedOut } from '~/store/modules/users/actions';

import {
  Container,
  DogLogo,
  LogoContainer,
  HeaderTitle,
  LogoutButton,
} from './styles';

export default function Header() {
  const [, dispatch] = useContext(Store);

  async function handleLogout() {
    const { logged_out } = await logout();
    dispatch(userLoggedOut({ logged_out }));
  }

  return (
    <Container>
      <LogoContainer>
        <DogLogo />
      </LogoContainer>
      <HeaderTitle>iVet - Uma lar para um animalzinho</HeaderTitle>
      <LogoutButton onClick={() => handleLogout()} />
    </Container>
  );
}
