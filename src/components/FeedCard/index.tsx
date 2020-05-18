import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

import TweetTab from '../TweetTab';
import NewTweet from '../NewTweet';
import TweetComponent from '../TweetComponent';

import PostsState from '../../context/post/state';
import UserState from '../../context/user/state';

interface IFeedCard {
  minWidth?: string;
}

const FeedCardStyled = styled(Card)<IFeedCard>`
  min-width: ${(props) => props.minWidth};  
  padding: 0;
`;

const FeedCard: React.FC<IFeedCard> = ({ minWidth }) => {
  const { posts } = useContext(PostsState);
  const { user } = useContext(UserState);

  const [tabs, setTabs] = useState([
    { id: '1', text: 'Tweets', active: true },
    { id: '2', text: 'Meus Tweets', active: false },
  ]);

  const handleChangeTable = (id) => {
    const newTabs = tabs.map((tab) => {
      const newTab = tab;
      if (tab.id === id) {
        if (!tab.active) {
          newTab.active = true;
        }
      } else {
        newTab.active = false;
      }
      return newTab;
    });

    setTabs(newTabs);
  };

  const queryTweets = () => {
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab!.id === '2') {
      return posts.filter((post) => (post.ownerId === user?.id)).map((post) => <TweetComponent key={post.timestamp} {...post} />);
    }
    return posts.map((post) => <TweetComponent key={post.timestamp} {...post} />);
  };

  return ((
    <FeedCardStyled minWidth={minWidth}>
      <TweetTab tabs={tabs} onClick={handleChangeTable} />
      <NewTweet />
      {queryTweets()}
    </FeedCardStyled>
  ));
};

export default FeedCard;
