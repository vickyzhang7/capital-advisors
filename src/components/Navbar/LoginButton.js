import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Log In
    </button>
  );
};

export default LoginButton;
