import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { GoLocation } from 'react-icons/go';
import { GiEarthAmerica } from 'react-icons/gi';
import { TiEdit } from 'react-icons/ti';

import Avatar from '../Avatar';
import ProfileStats from '../ProfileStats';

import AuthenticationState from '../../context/authentication/state';
import UserState from '../../context/user/state';

import { Card, CardBody } from '../Card';


const ProfileCardStyled = styled(Card)`
  min-width: 250px;
  max-width: 400px;
  padding-bottom: 0;
  margin-bottom: auto;
`;


const ProfileName = styled.span`
  font-size: ${(props) => props.theme.fonts.profile};
  margin-bottom: ${(props) => props.theme.spacers.spacer1};
`;

const EditAccount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${(props) => props.theme.fonts.profile}; 
  color: ${(props) => props.theme.card.fontColor};
  :hover {
    cursor: pointer;
  }
`;

const SigOut = styled(EditAccount)`
  font-size: ${(props) => props.theme.fonts.link}; 
  left: 0;
`;

const TwitterName = styled.span`
  font-size: ${(props) => props.theme.fonts.label}; 
  color: ${(props) => props.theme.fonts.grayColor};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const Information = styled.span`
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  font-size: ${(props) => props.theme.fonts.description};
  overflow-wrap: break-word;
  text-align: center;
`;

const Description = Information;

const ProfileCard: React.FC = () => {
  const history = useHistory();
  const { handleSignOut } = useContext(AuthenticationState);
  const { user } = useContext(UserState);

  const profilesStats = {
    tweets: 30,
    followers: 50,
    following: 12,
  };

  const changePage = () => {
    history.push('/profile');
  };

  const signOut = () => {
    handleSignOut();
  };

  return (
    <ProfileCardStyled>
      <CardBody>
        <SigOut onClick={signOut}>Sair da conta</SigOut>
        <EditAccount onClick={changePage}><TiEdit /></EditAccount>
        <Avatar rounded size={100} src={user?.photoURL} alt="Profile avatar" />
        <ProfileName>{user?.name}</ProfileName>
        <TwitterName>
          @
          {user?.name}
        </TwitterName>
        <Information>
          <GoLocation />
          {user?.location}
          <GiEarthAmerica />
        </Information>
        <Description>{user?.description}</Description>
        <ProfileStats {...profilesStats} />
      </CardBody>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
