import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import Avatar from '../Avatar';
import Button from '../Button';
import TextArea from '../Form/TextArea';

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

const NewTweet: React.FC = () => (
  <Content>
    <Avatar size={40} rounded alt="Profile avatar in new tweet" />
    <SendArea>
      <TextArea placeholder="O que está acontecendo?" />
      <ActionArea>
        <Button>
          <ButtonText>
            Tweetar
          </ButtonText>
        </Button>
      </ActionArea>
    </SendArea>
  </Content>
);

export default NewTweet;
