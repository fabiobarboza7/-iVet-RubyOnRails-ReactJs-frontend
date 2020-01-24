import React from 'react';

import {
  Container,
  AnimalLogo,
  AnimalLocation,
  AnimalDetails,
  AnimalLogoBox,
  AnimalInfoBox,
  AnimalActionsBox,
  AnimalLikeButton,
  AnimalTextBox,
  AnimalMessagesButton,
} from './styles';

export default function Animals() {
  return (
    <Container>
      <AnimalLogoBox>
        <AnimalLogo />
      </AnimalLogoBox>
      <AnimalInfoBox>
        <AnimalTextBox>
          <AnimalDetails>Ração indefinida</AnimalDetails>
          <AnimalLocation>São Paulo - SP</AnimalLocation>
        </AnimalTextBox>
        <AnimalActionsBox>
          <AnimalMessagesButton />
          <AnimalLikeButton />
        </AnimalActionsBox>
      </AnimalInfoBox>
    </Container>
  );
}
