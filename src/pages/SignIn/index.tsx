import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Form/Input';

import SignInImageLogo from '../../assets/signIn.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  align-items: stretch;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
`;

const SignInImage = styled.img`
  height: 250px;
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

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };


  return (
    <Container>
      <Card>
        <CardBody>
          <SignInImage src={SignInImageLogo} alt="SignIn Image" />
          <Input width="100%" label="Email" type="text" value={name} onChange={handleChange} />
          <Input width="100%" label="Senha" type="password" value={name} onChange={handleChange} />
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
