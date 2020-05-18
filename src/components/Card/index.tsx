import styled from 'styled-components';

export const Card = styled.div`
  color: ${(props) => props.theme.card.fontColor};
  padding: ${(props) => (props.theme.spacers.spacer3)};  
  border-radius: ${(props) => props.theme.spacers.spacer2};
  height: 'max-content';
  margin-right: ${(props) => (props.theme.spacers.spacer3)};
  margin-bottom: ${(props) => (props.theme.spacers.spacer3)};
  position: inherit;
  border-color: ${(props) => (props.theme.card.borderColor)};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props) => (props.theme.card.backgroundColor)};
`;

export const CardBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;
