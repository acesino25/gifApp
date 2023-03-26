import React from 'react'
import Populares from '../components/Gifs/Populares'

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        Bienvenido

        <div>
            <h4>Gif Populares</h4>
            <Populares></Populares>
        </div>
    </div>
  )
}

export default Home