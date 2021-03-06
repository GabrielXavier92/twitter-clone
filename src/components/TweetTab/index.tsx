import React from 'react';
import styled from 'styled-components';

interface ITweetTab {
  tabs: Array<ITab>;
  onClick?: any;
}

const StyleTweetTab = styled.div`
  display: flex;
  border-bottom: 1px solid;
  width: 100%;
  height: ${(props) => (props.theme.spacers.spacer5)};
  padding-top: ${(props) => (props.theme.spacers.spacer3)}; 
  box-sizing: border-box;
  border-color: ${(props) => (props.theme.card.borderColor)};
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
  border-bottom: ${(props) => (props.active ? `1px solid ${props.theme.colors.primary}` : null)};
  color: ${(props) => (props.active ? props.theme.colors.primary : null)};
  :hover{
    cursor: pointer;
  }
`;
const TweetTab: React.FC<ITweetTab> = ({ tabs, onClick }) => {
  const handleClick = (id) => onClick(id);

  return (
    <StyleTweetTab>
      {tabs.map((tab: ITab) => (
        <Tab key={tab.id} id={tab.id} text={tab.text} active={tab.active} onClick={() => { handleClick(tab.id); }}>
          <div>
            {tab.text}
          </div>
        </Tab>
      ))}
    </StyleTweetTab>
  );
};

export default TweetTab;
