import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { AiOutlineClockCircle } from 'react-icons/ai';

import { IPost } from 'src/interfaces/post';
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
  background-color: ${(props) => (props.theme.card.tweetCardBackgroud)};
  border-color: ${(props) => (props.theme.card.tweetCardBorder)};

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
  font-size: ${(props) => props.theme.fonts.link}; 
  color: ${(props) => props.theme.fonts.grayColor};
  margin-right: ${(props) => props.theme.spacers.spacer3};
`;

const Information = styled.span`
  font-size: ${(props) => props.theme.fonts.label};
  margin-left: auto;
`;

const TweetComponent: React.FC<IPost> = ({
  ownerName, ownerPhotoURL, timestamp, content,
}) => (
  <Content>
    <Avatar size={40} src={ownerPhotoURL} rounded alt="Profile avatar in new tweet" />
    <TweetCard>
      <TweetProfile>
        <ProfileName>{ownerName}</ProfileName>
        <TwitterName>
          @
          {ownerName}
        </TwitterName>
        <Information>
          <AiOutlineClockCircle />
          {moment(timestamp).fromNow()}
        </Information>
      </TweetProfile>
      <div>
        {content}
      </div>
    </TweetCard>
  </Content>
);

export default TweetComponent;
