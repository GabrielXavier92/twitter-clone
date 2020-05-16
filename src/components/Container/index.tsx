import styled, { css } from 'styled-components';
import theme from 'styled-theming';


const ContainerStyles = theme('mode', {
  light: css`
    background-color: ${(props) => props.theme.container.backgroudColor};
  `,
  dark: css``,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  ${ContainerStyles}
`;

export default Container;
