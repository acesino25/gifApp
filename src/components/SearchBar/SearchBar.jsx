import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    /**
     * navigate de useNavigate
     */
    const navigate = useNavigate()

    /**
     * useRef for the form
     */
    const buscador = useRef(null)

    /**
     * Handle Submit
     */
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e)

        // Con el useRef es más fácil, solo debemos apuntar al 'current'
        // en lugar de hacer búsquedas en el event
        const formulario = new FormData(buscador.current)
        
        // .get() es una función del objeto FormData en el formulario
        const buscar = formulario.get('buscar')

        // Ahora redirigiremos a una nueva url
        // y pasamos la búsqueda a una nueva página
        navigate(`/buscar/${buscar}`)
    }

  return (
    <form 
    ref={buscador}
    onSubmit={(e)=>{
        handleSubmit(e)
    }}
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px'}}>
        <label htmlFor='buscar'>
            <input 
            type="text" 
            name='buscar'
            style={{height: '2em', padding:'4px', fontSize: '16px', 
            fontFamily: 'calibri'}}></input>
        </label>
        <button type='submit' style={{backgroundColor:'#CBCBCB'}}>🔍</button>
    </form>
  )
}

export default SearchBar