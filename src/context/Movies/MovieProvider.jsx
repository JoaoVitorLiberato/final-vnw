/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { MovieContext } from "./MovieContext"
import requestsAll from "../../plugins/services/movie/requests"
import { useState, useEffect } from "react"


const MovieProvider = ({ children }) => {
  const { list } = requestsAll()
  
  const [ allDataMovie, setAllDataMovie ] = useState({
    completeData: [],
    results: []
  })
  
  const [ allDataSeries, setAllDataSeries ] = useState({
    completeData: [],
    results: []
  })
  
  useEffect(() => {
    const requestAllData = async () => {
      const numberAleatorio = Math.random() * 32 + 55 * 3
      const [ responseMovies, ResponseSeries ] = await Promise.all([
        list('movie', 'popular', Math.ceil(numberAleatorio)),
        list('tv', 'popular', Math.ceil(numberAleatorio)),
      ])

      setAllDataMovie({
        completeData: responseMovies,
        results: responseMovies.results.map(
          item => {
            return {
              ...item
            }
        }),
        oneID: responseMovies.results[0].id
      })

      setAllDataSeries({
        completeData: ResponseSeries,
        results: ResponseSeries.results.map(
          item => {
            return {
              ...item
            }
        }),
        oneID: ResponseSeries.results[0].id
      })
    }
    requestAllData()
  }, [])
  
  return(
    <MovieContext.Provider 
      value={{ allDataMovie, allDataSeries }}
    >
      { children }
    </MovieContext.Provider>
  )
}


export default MovieProvider