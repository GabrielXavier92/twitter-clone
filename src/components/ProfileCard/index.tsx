import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { GoLocation } from 'react-icons/go';
import { GiEarthAmerica } from 'react-icons/gi';
import { TiEdit } from 'react-icons/ti';

import Avatar from '../Avatar';
import ProfileStats, { IProfileStats } from '../ProfileStats';

import AuthenticationState from '../../context/authentication/state';

import { Card, CardBody } from '../Card';

interface IProfileCard {
  profileName?: string;
  profilePhoto?: string;
  profileTwitter?: string;
  profileLocale?: string;
  profileDescription?: string;
  profilesStats?: IProfileStats;
}

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
  color: ${(props) => props.theme.fonts.greyColor};
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
  color: ${(props) => props.theme.fonts.greyColor};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const Information = styled.span`
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  font-size: ${(props) => props.theme.fonts.description};
  overflow-wrap: break-word;
  text-align: center;
`;

const Description = Information;

const ProfileCard: React.FC<IProfileCard> = ({
  profileName, profilePhoto, profileTwitter, profileLocale, profileDescription, profilesStats,
}) => {
  const history = useHistory();
  const { handleSignOut } = useContext(AuthenticationState);

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
        <Avatar rounded size={100} src={profilePhoto} alt="Profile avatar" />
        <ProfileName>{profileName}</ProfileName>
        <TwitterName>
          @
          {profileTwitter}
        </TwitterName>
        <Information>
          <GoLocation />
          {profileLocale}
          <GiEarthAmerica />
        </Information>
        <Description>{profileDescription}</Description>
        <ProfileStats {...profilesStats} />
      </CardBody>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
