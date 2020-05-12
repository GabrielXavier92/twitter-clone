import React from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  const signIn = 'SignIn';

  return (
    <div>
      SignIn
      {signIn}
      <Link to="/signup">Muda Pagina</Link>
    </div>
  );
};

export default SignIn;
