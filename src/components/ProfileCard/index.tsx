import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { GoLocation } from 'react-icons/go';
import { GiEarthAmerica } from 'react-icons/gi';
import { TiEdit } from 'react-icons/ti';

import Avatar from '../Avatar';
import ProfileStats, { IProfileStats } from '../ProfileStats';

import { Card, CardBody } from '../Card';

interface IProfileCard {
  profileName?: string;
  profileTwitter?: string;
  profileLocale?: string;
  profileDescription?: string;
  profilesStats?: IProfileStats;
}

const ProfileCardStyled = styled(Card)`
  min-width: 150px;
  max-width: 300px;
  padding-bottom: 0;
  margin-bottom: auto;
`;


const ProfileName = styled.span`
  font-size: ${(props) => props.theme.fonts.profile};
  margin-bottom: ${(props) => props.theme.spacers.spacer1};
`;

const EditAccount = styled.span`
  font-size: ${(props) => props.theme.fonts.profile}; 
  color: ${(props) => props.theme.fonts.greyColor};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
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
  profileName, profileTwitter, profileLocale, profileDescription, profilesStats,
}) => {
  const history = useHistory();

  const changePage = () => {
    history.push('/profile');
  };

  return (
    <ProfileCardStyled>
      <CardBody>
        <EditAccount onClick={changePage}><TiEdit /></EditAccount>
        <Avatar rounded size={80} alt="Profile avatar" />
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
