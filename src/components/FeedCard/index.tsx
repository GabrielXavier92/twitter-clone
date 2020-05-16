import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

import TweetTab, { ITab } from '../TweetTab';
import NewTweet from '../NewTweet';
import TweetComponent from '../TweetComponent';

interface IFeedCard {
  width?: string;
}

const FeedCardStyled = styled(Card)<IFeedCard>`
  width: ${(props) => props.width};
  padding: 0;
`;

const FeedCard: React.FC<IFeedCard> = ({ width }) => {
  const tabs: Array<ITab> = [
    { id: '1', text: 'Tweets', active: true },
    { id: '2', text: 'Meus Tweets', active: false },
  ];

  const tweets = [
    { id: '1', text: 'text ' },
  ];

  return ((
    <FeedCardStyled width={width}>
      <TweetTab tabs={tabs} />
      <NewTweet />
      {tweets.map(() => (<TweetComponent />))}
    </FeedCardStyled>
  ));
};

export default FeedCard;
