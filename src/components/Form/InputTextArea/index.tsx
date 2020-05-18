import React from 'react';
import styled from 'styled-components';

interface IInputTextArea {
  width?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: any;
}

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
  background-color: ${(props) => props.theme.input.backgroundColor};
  border-bottom: ${(props) => props.theme.spacers.spacer0} solid ${(props) => props.theme.input.borderColor};
  color: ${(props) => props.theme.colors.primary};
`;


const Label = styled.label`
  font-size: ${(props) => props.theme.fonts.label};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.spacers.spacer1}; 
`;

export const TextArea = styled.textarea`
  resize: none;
  border-radius: ${(props) => props.theme.spacers.spacer2};
  border: 1px solid ${(props) => (props.theme.card.borderColor)};
  font-size: ${(props) => props.theme.fonts.input};
  width: -webkit-fill-available;
  min-height: 100px;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
  padding: ${(props) => props.theme.spacers.spacer3};
  background-color: ${(props) => props.theme.input.textBackgroundColor};
`;

const StyledInputText = styled(TextArea)`
  color: ${(props) => props.theme.input.fontColor};
  font-weight: 600;
  font-size: ${(props) => props.theme.fonts.input};
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;


const InputTextArea: React.FC<IInputTextArea> = ({
  value, onChange, width, label, placeholder,
}) => (
  <Container inputWidth={width}>
    <Label>{label}</Label>
    <StyledInputText onChange={onChange} value={value} placeholder={placeholder} />
  </Container>
);

export default InputTextArea;
