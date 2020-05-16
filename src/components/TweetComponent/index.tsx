import React from 'react';
import styled from 'styled-components';

import { AiOutlineClockCircle } from 'react-icons/ai';

import Avatar from '../Avatar';
import { Card } from '../Card';

const Content = styled.div`
  display: flex;
  padding: ${(props) => (props.theme.spacers.spacer3)}; 
`;

const TweetCard = styled(Card)`
  margin-left: ${(props) => (props.theme.spacers.spacer3)};
  width: 100%;
  max-width: 100%;
  margin-right: 0;
  border-radius: 0 ${(props) => props.theme.spacers.spacer2} ${(props) => props.theme.spacers.spacer2};
`;

const TweetProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const ProfileName = styled.span`
  font-size: ${(props) => props.theme.fonts.profile};
  margin-right: ${(props) => props.theme.spacers.spacer3};
`;

const TwitterName = styled.span`
  font-size: ${(props) => props.theme.fonts.label}; 
  color: ${(props) => props.theme.fonts.greyColor};
`;

const Information = styled.span`
  font-size: ${(props) => props.theme.fonts.description};
  margin-left: auto;
`;

const TweetComponent: React.FC = () => (
  <Content>
    <Avatar size={40} rounded alt="Profile avatar in new tweet" />
    <TweetCard>
      <TweetProfile>
        <ProfileName>Gabriel Xavier</ProfileName>
        <TwitterName>@tweet</TwitterName>
        <Information>
          <AiOutlineClockCircle />
          35min
        </Information>
      </TweetProfile>
      <div>
        conteudo do tweet
      </div>
    </TweetCard>
  </Content>
);

export default TweetComponent;
