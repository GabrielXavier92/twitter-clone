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
    border-bottom: 2px solid ${(props) => props.theme.input.borderColor};

    color: ${(props) => props.theme.colors.primary};
  `,
});


const Container = styled.div<{ inputWidth?: string }>`
  width: ${(props) => (props.inputWidth)};
  margin-bottom: 1px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0 0 2px 2px;
  padding: 8px 8px 16px 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${containerStyles}
`;

const labelStyles = theme('mode', {
  light: css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;   
  `,
});

const Label = styled.label`
  ${labelStyles}
`;

const inputStyles = theme('mode', {
  light: css`
    color: black;
    font-weight: 600;
    font-size: 18px;
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
