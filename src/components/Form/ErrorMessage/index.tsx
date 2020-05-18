import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: red;
  font-size: ${(props) => props.theme.fonts.error};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

export default ErrorMessage;
