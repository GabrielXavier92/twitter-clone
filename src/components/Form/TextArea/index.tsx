import styled from 'styled-components';

const TextArea = styled.textarea`
  resize: none;
  border-radius: ${(props) => props.theme.spacers.spacer2};
  border: 1px solid ${(props) => (props.theme.card.borderColor)};
  font-size: ${(props) => props.theme.fonts.input};
  width: -webkit-fill-available;
  min-height: 100px;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  padding: ${(props) => props.theme.spacers.spacer3};
`;

export default TextArea;
