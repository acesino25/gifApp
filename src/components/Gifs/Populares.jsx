import React from 'react'
import useFetchUrl from '../../services/useFetchUrl'
import ListarResultados from './ListarResultados'

const Populares = () => {

  /* vamos a traer los resultados de un service */
  const resultados = useFetchUrl('https://api.giphy.com/v1/gifs/search?api_key=kSoUpdxfGLuvUJT34D1jwUivkkWzyeG6&q=element&limit=25&offset=0&rating=g&lang=es')

  return (
    <div>
        <h1>Trending...</h1>
        <div>
          <ListarResultados resultados={resultados}></ListarResultados>
        </div>
    </div>
  )
}

export default Populares