import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

interface IInputText {
  width?: string;
  label?: string;
  type?: string;
  value: string;
  onChange: any;
}

const containerStyles = theme('mode', {
  light: css`
    background-color: ${(props) => props.theme.input.backgroundColor};
    border-bottom: ${(props) => props.theme.spacers.spacer0} solid ${(props) => props.theme.input.borderColor};
    color: ${(props) => props.theme.colors.primary};
  `,
});


const Container = styled.div<{ inputWidth?: string }>`
  display: flex;
  flex-direction: column;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: ${(props) => (props.inputWidth)};
  padding: ${(props) => props.theme.spacers.spacer1} ${(props) => props.theme.spacers.spacer2}  ${(props) => props.theme.spacers.spacer1} ${(props) => props.theme.spacers.spacer3};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  border-radius: 0 0 ${(props) => props.theme.spacers.spacer0} ${(props) => props.theme.spacers.spacer0};
  ${containerStyles}
`;

const labelStyles = theme('mode', {
  light: css`
    font-size: ${(props) => props.theme.fonts.label};
    font-weight: 500;
    margin-bottom: ${(props) => props.theme.spacers.spacer1};   
  `,
});

const Label = styled.label`
  ${labelStyles}
`;

const inputStyles = theme('mode', {
  light: css`
    color: black;
    font-weight: 600;
    font-size: ${(props) => props.theme.fonts.input};
    background-color: transparent;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  `,
});

const StyledInputText = styled.input`
  ${inputStyles}
`;


const InputText: React.FC<IInputText> = ({
  value, onChange, width, label, type = 'text',
}) => (
  <Container inputWidth={width}>
    <Label>{label}</Label>
    <StyledInputText onChange={onChange} value={value} type={type} />
  </Container>
);

export default InputText;
