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
`;

const SignInImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const BackText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.link};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  margin-right: auto;
  margin-top: ${(props) => props.theme.spacers.spacer3};
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  font-weight: 900;
`;


const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changePage = () => {
    history.push('/signin');
  };

  return (
    <Container>
      <Card width="300px" margin="auto">
        <CardBody>
          <SignInImage src={SignInImageLogo} alt="SignIn Image" />
          <Input width="100%" label="Nome" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
          <Input width="100%" label="Email" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <Input width="100%" label="Senha" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <Button outlined width="100%"><ButtonText>Cadastrar</ButtonText></Button>
          <BackText onClick={changePage}>Voltar</BackText>
        </CardBody>
      </Card>
    </Container>
  );
};
export default SignUp;
