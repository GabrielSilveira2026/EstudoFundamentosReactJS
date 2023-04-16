import React, { useState } from 'react'
import axios from 'axios'

function Empresa() {
  const [lista, setLista] = useState([])
  const [jogo, setJogo] = useState('')
  async function pesquisa(){
    const retorno = await axios.get(`https://g4673849dbf8477-kh8pftimtcmp3b10.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pesquisa/resultados/${jogo}?limit=10000`)
    console.log(retorno.data.items);
    setLista(retorno.data.items)
  }
  
  return (
    <div>
        <h1>Empresa</h1>
        <p>Conteudo da pagina Empresa</p>
        <input type="text" placeholder="Pesquise um jogo" onChange={(e) =>{setJogo(e.target.value)}}/>
        <button onClick={pesquisa}>Pesquisa</button>

        {
          lista.length > 0 &&
          <div style={{margin:'auto'}}>
            {
              lista.map((jogo) => (
                <div style={{backgroundColor:'pink',marginBottom:'25px'}}>
                  <img style={{width:'100%'}} src={jogo.imagem}/>
                  <p style={{margin:0}} key={jogo.id} ><a href={`https://store.steampowered.com/app/${jogo.id_jogo_steam}`} target="_blank">{jogo.nome} - {jogo.preco}</a></p>
                </div>
              ))
            }
          </div>
        }
        
    </div>
  )
}

export default Empresa