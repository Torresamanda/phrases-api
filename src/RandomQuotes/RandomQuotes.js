import React, { useEffect, useState } from 'react';

import { URL } from '../Config/index.js';

import { Container, Main, Author, Phrase, Quote, Img, Button } from './style.js';

import quoteLeft from '../Imagens/quote-left-solid.svg'
import quoteRight from '../Imagens/quote-right-solid.svg'

export default function Random() {
  const [citacao, setCitacao] = useState({})

  let data 
  const numRandom = () => Math.floor(Math.random() * data.length) + 1;

  useEffect(() => {
    getCitacoes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getCitacoes() {
    try {
      const res = await fetch(URL)
      data = await res.json()
      setCitacao(data[numRandom()])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Main>
        <Phrase>
          <Quote>
            <Img src={quoteLeft} alt="" />
          </Quote>
            {citacao.text}
          <Quote>
            <Img src={quoteRight} alt="" />
          </Quote>
        </Phrase>
        <Author> - {citacao.author ? citacao.author : "Desconhecido"}</Author>
        <Button onClick={getCitacoes}>Nova Citação</Button>
      </Main>
    </Container>
  );
}


