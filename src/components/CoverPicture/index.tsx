import React from 'react';
import styled from 'styled-components';

interface IConverPicture {
  src?: string;
}

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 193px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.theme.coverPicture.backgroundColor)};
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

const CoverPicture: React.FC<IConverPicture> = ({ src }) => (<Content><Image src={src} /></Content>);

export default CoverPicture;
