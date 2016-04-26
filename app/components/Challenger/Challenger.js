import React, { PropTypes } from 'react'

function Challenger (props) {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.vitorias}</td>
      <td>{props.data.derrotas}</td>
    </tr>
  )
}

Challenger.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      vitorias: PropTypes.number.isRequired,
      derrotas: PropTypes.number.isRequired
    })
}

export default Challenger
