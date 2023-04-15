import React from 'react'

function OutraLista({itens}) {
  return (
    <>
        <h3>Lista de bibliotecas</h3>

        {
            itens.length > 0 ?
            itens.map((item, index) => (
                <p key={index} >{item}</p>
            ))
            :
            <p>Não há itens nesta lista</p>
        }
    </>
  )
}

export default OutraLista