import React, { useContext } from 'react';

import { logout } from '../../services/logout.service';
import { Store } from '../../store';
import { userLoggedOut } from '../../store/modules/users/actions';

export default function LogoutButton() {
  const [, dispatch] = useContext(Store);

  async function handleLogout() {
    const { logged_out } = await logout();
    dispatch(userLoggedOut({ logged_out }));
  }

  return (
    <button type="button" onClick={() => handleLogout()}>
      Logout
    </button>
  );
}
