import React, { PropTypes } from 'react'
import Challenger from './Challenger'

function Challengers (props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Vitorias</th>
          <th>Derrotas</th>
        </tr>
      </thead>
      <ChallengerRows data={props.data}/>
    </table>
  )
}

function ChallengerRows (props) {
  return (
    <tbody>
      { props.data.map( (user, index) => <Challenger data={user} key={index} />) }
    </tbody>
  )
}

Challengers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      vitorias: PropTypes.number.isRequired,
      derrotas: PropTypes.number.isRequired
    })
  )
}

export default Challengers
