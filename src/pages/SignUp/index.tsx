import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';
import Container from '../../components/Container';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Input from '../../components/Form/Input';
import { Card, CardBody } from '../../components/Card';

import AuthenticationState from '../../context/authentication/state';

import SignInImageLogo from '../../assets/signIn.png';

const SignUpImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const BackText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.link};
  margin: ${(props) => props.theme.spacers.spacer3} auto ${(props) => props.theme.spacers.spacer3} 0;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  font-weight: 900;
`;


const SignUp: React.FC = () => {
  const history = useHistory();
  const { handleSignUp, error } = useContext(AuthenticationState);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changePage = () => {
    history.push('/signin');
  };

  const submitForm = () => {
    handleSignUp({ name, email, password });
  };

  return (
    <Container>
      <Card width="300px" margin="auto">
        <CardBody>
          <SignUpImage src={SignInImageLogo} alt="SignIn Image" />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input width="100%" label="Nome" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
          <Input width="100%" label="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <Input width="100%" label="Senha" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <Button outlined width="100%" onClick={submitForm}><ButtonText>Cadastrar</ButtonText></Button>
          <BackText onClick={changePage}>Voltar</BackText>
        </CardBody>
      </Card>
    </Container>
  );
};
export default SignUp;
