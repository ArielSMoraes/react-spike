import React from 'react'
import Challengers from './Challenger/Challengers'

var users = [
  {
    name: 'Celosama',
    vitorias: 10,
    derrotas: 20
  },
  {
    name: 'Hammerrhoads',
    vitorias: 20,
    derrotas: 10
  }
];

function Home () {
  return (
    <div>
      <Challengers data={users}/>
    </div>
  )
}

export default Home
