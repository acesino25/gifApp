import React, {useEffect, useState} from "react";

const useFetchUrl = (url) =>{
    const [resultados, setResultados] = useState([])
    console.log(url)
  useEffect(()=>{
    fetch(url).then(
      response =>{
        if(!response.ok){
          switch (response.status){     
            case 404:
              throw new error("No se han encontrado valores")
              break;
            case 500:
              throw new error("El servidor ha arrojado un error interno")
              break;
            default:
              throw new error("Un error ajeno al 404 y al 500")
              break;
          }
        }

        return response.json()

      }
    ).then(
      ({data}) =>{
        setResultados(data)
      }
    ).catch(
      error =>{
        console.log(error)
      }
    )
  }, [url])

  return resultados
}

export default useFetchUrl