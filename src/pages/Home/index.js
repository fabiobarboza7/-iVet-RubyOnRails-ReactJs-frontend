import React, { useState, useEffect } from 'react';

import Animals from '~/components/Animals';
import Header from '~/components/Header';

import { Main } from './styles';

export default function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Main>
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
        <Animals />
      </Main>
    </>
  );
}
