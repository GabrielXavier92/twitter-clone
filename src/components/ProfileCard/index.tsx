import React from 'react';
import styled from 'styled-components';

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
`;


const ProfileName = styled.span`
  font-size: ${(props) => props.theme.fonts.profile};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const TwitterName = styled.span`
  font-size: ${(props) => props.theme.fonts.label}; 
  color: ${(props) => props.theme.fonts.greyColor};
`;

const LocaleName = styled.span`
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  font-size: ${(props) => props.theme.fonts.description};
  overflow-wrap: break-word;
  text-align: center;
`;

const Description = LocaleName;

const ProfileCard: React.FC<IProfileCard> = ({
  profileName, profileTwitter, profileLocale, profileDescription, profilesStats,
}) => (
  <ProfileCardStyled>
    <CardBody>
      <Avatar rounded size={80} alt="Profile avatar" />
      <ProfileName>{profileName}</ProfileName>
      <TwitterName>
        @
        {profileTwitter}
      </TwitterName>
      <LocaleName>{profileLocale}</LocaleName>
      <Description>{profileDescription}</Description>
      <ProfileStats {...profilesStats} />
    </CardBody>
  </ProfileCardStyled>
);

export default ProfileCard;
