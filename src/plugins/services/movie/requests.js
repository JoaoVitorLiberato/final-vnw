import conectMovie from "./movie"


const requestsAll = () => ({
  list: async (segment, type, page) => {
    const { data } = await conectMovie.get(`/${segment}/${type === '' ? type : 'popular'}?include_adult=false&language=pt-BR&page=${page}`)
    
    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  },
  setHero: async (path, id) => {
    const { data } = await conectMovie.get(`/${path}/${id}&include_adult=false`)
    
    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  }
})

export default requestsAll