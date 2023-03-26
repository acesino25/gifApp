import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchUrl from '../../services/useFetchUrl'
import ListarResultados from '../Gifs/ListarResultados'

const Results = () => {
    // Obtemeos el param de la url
    const {buscar} = useParams()
    const resultados = useFetchUrl(`https://api.giphy.com/v1/gifs/search?api_key=kSoUpdxfGLuvUJT34D1jwUivkkWzyeG6&q=${buscar}&limit=25&offset=0&rating=g&lang=es`)
    console.log({buscar, resultados})
  return (
    <div>Results
        <div style={{display: 'flex'}}>
            <ListarResultados resultados={resultados}></ListarResultados>
        </div>
    </div>
  )
}

export default Results