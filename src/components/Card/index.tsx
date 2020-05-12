import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const cardStyles = theme('mode', {
  dark: css``,
});

const StyledCard = styled.div`
  display: flex;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.theme.card.borderColor)};
  border-radius: 12px;
  ${cardStyles};  
`;

const Card: React.FC = ({ children }) => (<StyledCard>{children}</StyledCard>);

export default Card;
