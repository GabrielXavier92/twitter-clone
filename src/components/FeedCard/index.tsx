import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

import TweetTab, { ITab } from '../TweetTab';
import NewTweet from '../NewTweet';
import TweetComponent from '../TweetComponent';

import PostsState from '../../context/post/state';

interface IFeedCard {
  minWidth?: string;
}

const FeedCardStyled = styled(Card)<IFeedCard>`
  min-width: ${(props) => props.minWidth};  
  padding: 0;
`;

const FeedCard: React.FC<IFeedCard> = ({ minWidth }) => {
  const { posts } = useContext(PostsState);
  const tabs: Array<ITab> = [
    { id: '1', text: 'Tweets', active: true },
    { id: '2', text: 'Meus Tweets', active: false },
  ];

  return ((
    <FeedCardStyled minWidth={minWidth}>
      <TweetTab tabs={tabs} />
      <NewTweet />
      {posts.map((post) => <TweetComponent key={post.timestamp} {...post} />)}
    </FeedCardStyled>
  ));
};

export default FeedCard;
