import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
