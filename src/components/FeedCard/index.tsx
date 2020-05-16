import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

import TweetTab, { ITab } from '../TweetTab';
import NewTweet from '../NewTweet';
import TweetComponent from '../TweetComponent';

interface IFeedCard {
  minWidth?: string;
}

const FeedCardStyled = styled(Card)<IFeedCard>`
  min-width: ${(props) => props.minWidth};  
  padding: 0;
`;

const FeedCard: React.FC<IFeedCard> = ({ minWidth }) => {
  const tabs: Array<ITab> = [
    { id: '1', text: 'Tweets', active: true },
    { id: '2', text: 'Meus Tweets', active: false },
  ];

  const tweets = [
    { id: '1', text: 'text ' },
    { id: '2', text: 'text ' },
  ];

  return ((
    <FeedCardStyled minWidth={minWidth}>
      <TweetTab tabs={tabs} />
      <NewTweet />
      {tweets.map(() => (<TweetComponent />))}
    </FeedCardStyled>
  ));
};

export default FeedCard;
