import React from 'react'

const ListarResultados = ({resultados}) => {
  return (
    <div style={{display:'flex', flexWrap: 'wrap', width: '90vw', justifyContent: 'center'}}>
        {
            resultados.map(gif =>{
              const {images, id} = gif
              return(
                <img src={images.fixed_height.url} id={id} alt={id} key={id}></img>
              )
            })
          }
    </div>
  )
}

export default ListarResultados