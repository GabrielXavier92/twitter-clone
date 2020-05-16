import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import AuthenticationState from '../../context/authentication/state';

import Button from '../../components/Button';
import Container from '../../components/Container';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Input from '../../components/Form/Input';
import { Card, CardBody } from '../../components/Card';

import SignInImageLogo from '../../assets/signIn.png';


const SignInCard = styled(Card)`
  width: 300px;
  margin: auto;
`;

const SignInImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const ForgotText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.link};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  margin-right: auto;
`;

const ButtonText = styled.span`
  font-weight: 900;
`;

const OrText = styled.span`
  margin: ${(props) => props.theme.spacers.spacer2};
`;

const SignIn: React.FC = () => {
  const history = useHistory();
  const { handleSignIn, error } = useContext(AuthenticationState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    handleSignIn({ email, password });
  };

  const changePage = () => {
    history.push('/signup');
  };

  return (
    <Container>
      <SignInCard>
        <CardBody>
          <SignInImage src={SignInImageLogo} alt="SignIn Image" />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input width="100%" label="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <Input width="100%" label="Senha" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <ForgotText>Esqueceu sua senha?</ForgotText>
          <Button outlined width="100%" onClick={submitForm}><ButtonText>Entrar</ButtonText></Button>
          <OrText>ou</OrText>
          <Button width="100%" onClick={changePage}><ButtonText>Inscrever-se</ButtonText></Button>
        </CardBody>
      </SignInCard>
    </Container>
  );
};
export default SignIn;
