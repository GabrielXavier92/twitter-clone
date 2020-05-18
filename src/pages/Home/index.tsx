import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import CoverPicture from '../../components/CoverPicture';
import FeedCard from '../../components/FeedCard';
import ProfileCard from '../../components/ProfileCard';

import UserState from '../../context/user/state';

import PostsProvider from '../../context/post';

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${(props) => props.theme.spacers.spacer6} auto auto;
`;

const Home: React.FC = () => {
  const { user, handleGetUser } = useContext(UserState);

  const getData = () => {
    handleGetUser();
  };
  useEffect(getData, []);
  return (
    <PostsProvider>
      <Container>
        <CoverPicture src={user?.coverURL} />
        <Content>
          <ProfileCard
            profileName={user?.name}
            profilePhoto={user?.photoURL}
            profileTwitter={user?.name}
            profileDescription={user?.description}
            profileLocale={user?.location}
            profilesStats={{ tweets: 30, followers: 50, following: 12 }}
          />
          <FeedCard minWidth="40%" />
        </Content>
      </Container>
    </PostsProvider>
  );
};

export default Home;
