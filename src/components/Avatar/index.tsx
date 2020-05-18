import React from 'react';
import styled from 'styled-components';
import defaultProfile from '../../assets/defaultProfile.png';

interface IAvatar {
  size?: string | number;
  rounded?: boolean;
  src?: string;
  alt?: string;
}

const StyleAvatar = styled.img<IAvatar>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.rounded ? '50%' : 0)};
  max-height: 100%;
  max-width: 100%;
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const Avatar: React.FC<IAvatar> = ({
  alt, size, rounded, src,
}) => (<StyleAvatar alt={alt} height={size} width={size} rounded={rounded} src={src || defaultProfile} />);

export default Avatar;
