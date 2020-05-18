import React from 'react';
import styled from 'styled-components';
import { AiOutlineCamera } from 'react-icons/ai';

import Avatar from '../../Avatar';
import Button from '../../Button';

interface IImagePicker {
  value?: string;
  onChange?: any;
  isAvatar?: boolean;
  isButton?: boolean;
  size?: string | number;
  rounded?: boolean;
  alt?: string;
  buttonText?: string;
}

interface IContainer {
  size?: string | number;
}

const Container = styled.div<IContainer>`
  position: relative;
  height: ${(props) => `${props.size}px`};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;


const InputFileContainer = styled.div<IContainer>`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${(props) => props.theme.fonts.profile}; 
`;

const InputFileAvatar = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px; 
  opacity: 0;
  z-index: 2;
`;

const InputFileButton = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  opacity: 0;
  z-index: 2;
`;

const ImagePicker: React.FC<IImagePicker> = ({
  value,
  onChange,
  isAvatar,
  size,
  rounded,
  alt,
  buttonText,
  isButton,
}) => (
  <Container size={size}>
    {isAvatar
        && (
        <>
          <Avatar size={size} src={value} rounded={rounded} alt={alt} />
          <InputFileContainer size={size}>
            <AiOutlineCamera />
            <InputFileAvatar
              onChange={onChange}
              type="file"
              accept="image/jpeg,image/png,image/webp"
            />
          </InputFileContainer>
        </>
        )}
    {isButton
        && (
        <div>
          <Button>
            {buttonText}
            <InputFileButton
              onChange={onChange}
              type="file"
              accept="image/jpeg,image/png,image/webp"
            />
          </Button>
        </div>
        )}

  </Container>
);

export default ImagePicker;
