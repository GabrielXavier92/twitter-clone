import React, { useState } from 'react';
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
`;

const SignInImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 16px;
`;

const ForgotText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  margin-bottom: 16px;
  margin-right: auto;
`;

const ButtonText = styled.span`
  font-weight: 900;
`;

const OrText = styled.span`
  margin: 8px;
`;

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Card width="300px" height="600px" margin="100px 0">
        <CardBody>
          <SignInImage src={SignInImageLogo} alt="SignIn Image" />
          <Input width="100%" label="Email" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
          <Input width="100%" label="Senha" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <ForgotText>Esqueceu sua senha?</ForgotText>
          <Button outlined width="100%"><ButtonText>Entrar</ButtonText></Button>
          <OrText>ou</OrText>
          <Button width="100%"><ButtonText>Inscrever-se</ButtonText></Button>
        </CardBody>
      </Card>
    </Container>
  );
};
export default SignIn;
// #eef2f3
