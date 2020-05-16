import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

interface ITweetTab {
  tabs: Array<ITab>
}

const tweetTabStyles = theme('mode', {
  light: css`
    border-color: ${(props) => (props.theme.card.borderColor)};
  `,
  dark: css``,
});

const StyleTweetTab = styled.div`
  display: flex;
  border-bottom: 1px solid;
  width: 100%;
  padding-top: ${(props) => (props.theme.spacers.spacer3)}; 
  box-sizing: border-box;
  ${tweetTabStyles}
`;

export interface ITab {
  id: string;
  active?: boolean;
  text?: string;
}

const Tab = styled.div<ITab>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: ${(props) => (props.theme.spacers.spacer4)};
  padding-bottom: ${(props) => (props.theme.spacers.spacer3)};
  border-bottom: ${(props) => (props.active ? `1px solid ${props.theme.colors.primary}` : null)};
  color: ${(props) => (props.active ? props.theme.colors.primary : null)};
`;
const TweetTab: React.FC<ITweetTab> = ({ tabs }) => (
  <StyleTweetTab>
    {tabs.map((tab: ITab) => (<Tab key={tab.id} id={tab.id} text={tab.text} active={tab.active}><div>Tweets</div></Tab>))}
  </StyleTweetTab>
);

export default TweetTab;
