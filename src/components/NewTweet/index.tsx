import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import { IPost } from 'src/interfaces/post';
import Avatar from '../Avatar';
import Button from '../Button';
import { TextArea } from '../Form/InputTextArea';

import UserState from '../../context/user/state';
import PostState from '../../context/post/state';


const contentStyles = theme('mode', {
  light: css`
    border-bottom: ${(props) => (`1px solid ${props.theme.card.borderColor}`)};
  `,
  dark: css``,
});

const Content = styled.div`
  display: flex;
  padding: ${(props) => (props.theme.spacers.spacer3)}; 
  ${contentStyles}
`;

const SendArea = styled.div`
  width: 100%;
  max-width: 100%;
  margin-left: ${(props) => props.theme.spacers.spacer3};
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonText = styled.span`
  font-weight: 900;
`;

const NewTweet: React.FC = () => {
  const { user } = useContext(UserState);
  const { handleCreatePost } = useContext(PostState);

  const [content, setContent] = useState('');

  const submitForm = () => {
    const post: IPost = {
      ownerName: user?.name,
      ownerPhotoURL: user?.photoURL,
      timestamp: new Date().toString(),
      content,
    };
    handleCreatePost(post);
    setContent('');
  };
  return (
    <Content>
      <Avatar size={40} src={user?.photoURL} rounded alt="Profile avatar in new tweet" />
      <SendArea>
        <TextArea placeholder="O que está acontecendo?" value={content} onChange={(e) => { setContent(e.target.value); }} />
        <ActionArea>
          <Button onClick={submitForm}>
            <ButtonText>
              Tweetar
            </ButtonText>
          </Button>
        </ActionArea>
      </SendArea>
    </Content>
  );
};

export default NewTweet;
