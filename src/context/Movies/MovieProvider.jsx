/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MovieContext } from "./MovieContext"
import requestsMovie from "../../plugins/services/movie/requests"
import { useState, useEffect } from "react"

const MovieProvider = ({ children }) => {
  const { list } = requestsMovie()

  const [ allDataMovie, setAllDataMovie ] = useState({
    completeData: [],
    results: [],
    oneID: 0
  })
  const numberAleatorio = Math.random() * 33 / 2 + 55 * 3


  useEffect(() => {
    
    const resquestMovie = async () => {
      await list('movie', 'popular', Math.ceil(numberAleatorio))
        .then(response => {
          setAllDataMovie({
            completeData: response,
            results: response.results.map(
              item => {
                return {
                  ...item
                }
            }),
            oneID: response.results[0].id
          })
        })
          .catch(err => err)
      
    }

    resquestMovie()
  }, [])

  
  return(
    <MovieContext.Provider 
      value={{ allDataMovie }}
    >
      { children }
    </MovieContext.Provider>
  )
}


export default MovieProvider