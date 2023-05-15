/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { MovieContext } from "./MovieContext"
import requestsAll from "../../plugins/services/movie/requests"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"


const MovieProvider = ({ children }) => {
  const { list, trendingSegment } = requestsAll()
  const { pathname } = useLocation()
  
  const [ allData, setAllData ] = useState({
    completeData: [],
    results: []
  })
  
  const [ trending, setTrending ] = useState({
    completeData: [],
    results: []
  })
  
  useEffect(() => {
    const requestAllData = async () => {
      const numberAleatorio = Math.random() * 32 + 55 * 3
      const [ responseAllData, ResponseReting ] = await Promise.all([
        list('movie', 'popular', Math.ceil(numberAleatorio)),
        trendingSegment(pathname === "/filmes" || pathname === "/" ? "movie" : "tv", Math.ceil(numberAleatorio * 3)),
      ])

      setAllData({
        completeData: responseAllData,
        results: responseAllData.results.map(
          item => {
            return {
              ...item
            }
        })
      })

      setTrending({
        completeData: ResponseReting,
        results: ResponseReting.results.map(
          item => {
            return {
              ...item
            }
        })
      })
    }
    
    requestAllData()
  }, [])
  
  return(
    <MovieContext.Provider 
      value={{ allData, trending }}
    >
      { children }
    </MovieContext.Provider>
  )
}


export default MovieProvider