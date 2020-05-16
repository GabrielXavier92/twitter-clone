import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import FeedCard from '../../components/FeedCard';
import ProfileCard from '../../components/ProfileCard';

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${(props) => props.theme.spacers.spacer6} auto auto;
`;

const CoverPicture = styled.div`
  position: absolute;
  height: 193px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: grey;
`;

const Home: React.FC = () => (
  <Container>
    <CoverPicture>
      imagem principal
    </CoverPicture>
    <Content>
      <ProfileCard
        profileName="Gabriel Xavier"
        profileTwitter="meuTwitter"
        profileDescription="alguma descricao legal hahaha"
        profileLocale="Brasil"
        profilesStats={{ tweets: 30, followers: 50, following: 12 }}
      />
      <FeedCard width="40%" />
    </Content>

  </Container>
);

export default Home;
