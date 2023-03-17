import React from 'react'
import Item from './Item'

function List() {
  return (
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca ="a" ano_lancamento={1923}/>
            <Item marca ="b"/>
            <Item ano_lancamento={1945}/>
        </ul>
    </>
  )
}

export default List