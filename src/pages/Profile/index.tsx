import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Container from '../../components/Container';
import CoverPicture from '../../components/CoverPicture';
import Input from '../../components/Form/Input';
import InputTextArea from '../../components/Form/InputTextArea';
import ImagePicker from '../../components/Form/ImagePicker';

import UserState from '../../context/user/state';

import { Card, CardBody } from '../../components/Card';

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${(props) => props.theme.spacers.spacer6} auto auto;
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
  const { user, handleUpdateUser, uploadImageAsync } = useContext(UserState);

  const [photoURL, setAvatar] = useState(user?.photoURL || '');
  const [coverURL, setCoverPicture] = useState(user?.coverURL || '');
  const [name, setName] = useState(user?.name || '');
  const [location, setLocation] = useState(user?.location || '');
  const [description, setDescription] = useState(user?.description || '');


  const changePage = () => {
    history.push('/home');
  };

  const handlePickProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files![0]) {
      const url = await uploadImageAsync('photoURL', URL.createObjectURL(files![0]));
      setAvatar(url);
      handleUpdateUser({ photoURL: url });
    }
  };

  const handlePickCoverPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files![0]) {
      const url = await uploadImageAsync('coverURL', URL.createObjectURL(files![0]));
      setCoverPicture(url);
      handleUpdateUser({ coverURL: url });
    }
  };


  const submitForm = async () => {
    await handleUpdateUser({
      photoURL, coverURL, name, location, description,
    });
    changePage();
  };

  return (
    <Container>
      <CoverPicture src={coverURL} />
      <Content>
        <ProfileCard>
          <CardBody>
            <ImagePicker isAvatar rounded value={photoURL} size={150} onChange={handlePickProfileImage} />
            <ImagePicker isButton buttonText="Selecionar imagem de fundo" value={coverURL} onChange={handlePickCoverPicture} />

            <Input width="100%" label="Nome" value={name} onChange={(e) => { setName(e.target.value); }} />
            <Input width="100%" label="Localização" value={location} onChange={(e) => { setLocation(e.target.value); }} />
            <InputTextArea width="100%" label="Descrição" placeholder="Uma breve descrição sobre você" value={description} onChange={(e) => { setDescription(e.target.value); }} />
            <ActionButtons>
              <Button outlined onClick={changePage}>Voltar</Button>
              <Button onClick={submitForm}>Salvar</Button>
            </ActionButtons>
          </CardBody>
        </ProfileCard>
      </Content>

    </Container>
  );
};

export default Profile;
