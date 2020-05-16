import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Form/Input';

import SignInImageLogo from '../../assets/signIn.png';


const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12px;
`;

const SignInImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 16px;
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changePage = () => {
    history.push('/signup');
  };

  return (
    <Container>
      <Card width="300px" margin="auto">
        <CardBody>
          <SignInImage src={SignInImageLogo} alt="SignIn Image" />
          <Input width="100%" label="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <Input width="100%" label="Senha" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <ForgotText>Esqueceu sua senha?</ForgotText>
          <Button outlined width="100%"><ButtonText>Entrar</ButtonText></Button>
          <OrText>ou</OrText>
          <Button width="100%" onClick={changePage}><ButtonText>Inscrever-se</ButtonText></Button>
        </CardBody>
      </Card>
    </Container>
  );
};
export default SignIn;
