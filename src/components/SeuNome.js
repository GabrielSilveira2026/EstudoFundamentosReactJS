import React from 'react'

function SeuNome({ setNome }) {
  
    return (
        <div>
            <p>Digite seu Nome:</p>
            <input type='text' placeholder='Digite seu Nome' onChange={(e)=> setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome