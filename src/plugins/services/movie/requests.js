import conectMovie from "./movie"


const requestsMovie = () => ({
  list: async (segment, type, page) => {
    const { data } = await conectMovie.get(`/${segment === '' ? segment : 'movie'}/${type === '' ? type : 'popular'}?language=pt-BR&page=${page}`)
    
    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  },
  setHero: async (id) => {
    const { data } = await conectMovie.get(`/movie/${id}`)
    
    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  }
})

export default requestsMovie