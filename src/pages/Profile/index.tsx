import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button';
import Container from '../../components/Container';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Input from '../../components/Form/Input';
import InputTextArea from '../../components/Form/InputTextArea';
import { Card, CardBody } from '../../components/Card';

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${(props) => props.theme.spacers.spacer6} auto auto;
`;

const CoverPicture = styled.div`
  position: absolute;
  height: 193px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: grey;
`;

const ProfileCard = styled(Card)`
  min-width: 500px;
  margin: auto;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Profile: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const changePage = () => {
    history.push('/home');
  };

  return (
    <Container>
      <CoverPicture>
        imagem principal
      </CoverPicture>
      <Content>
        <ProfileCard>
          <CardBody>
            <ErrorMessage>oi</ErrorMessage>
            <Input width="100%" label="Nome" value={name} onChange={(e) => { setName(e.target.value); }} />
            <Input width="100%" label="Localização" value={location} onChange={(e) => { setLocation(e.target.value); }} />
            <InputTextArea width="100%" label="Descrição" placeholder="Uma breve descrição sobre você" value={description} onChange={(e) => { setDescription(e.target.value); }} />
            <ActionButtons>
              <Button outlined onClick={changePage}>Voltar</Button>
              <Button onClick={changePage}>Salvar</Button>
            </ActionButtons>
          </CardBody>
        </ProfileCard>
      </Content>

    </Container>
  );
};

export default Profile;
