import { FaHeart } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

import styled from 'styled-components';

import dogLogo from '~/assets/img/dog.png';

export const Container = styled.div`
  cursor: pointer;
  background-color: #ffe66d;
  border-radius: 5px;
  transition: 0.3s ease-in;
  &:hover {
    box-shadow: 0px 3px 5px 2px #ababab;
  }
`;

export const AnimalLogoBox = styled.div``;

export const AnimalInfoBox = styled.div`
  background-color: #4ecdc4;
  padding: 5px 15px;
  color: #f7fff7;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnimalLogo = styled.img.attrs({
  src: dogLogo,
})`
  width: 100px;
`;

export const AnimalTextBox = styled.div`
  width: 100%;
`;

export const AnimalLocation = styled.p``;

export const AnimalDetails = styled.p``;

export const AnimalActionsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AnimalLikeButton = styled(FaHeart).attrs({
  size: 30,
})`
  margin-left: 20px;
  color: #ff6b6b;
`;

export const AnimalMessagesButton = styled(TiMessages).attrs({
  size: 30,
})`
  color: #f7fff7;
`;
