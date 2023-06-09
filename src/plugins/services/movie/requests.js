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
  },
  searchTitle: async ( segment, search ) => {
    const { data } = await conectMovie.get(`search/${segment}?query=${search}`)
    
    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  },
  trendingSegment: async ( segment ) => {
    const { data } = await conectMovie.get(`trending/${segment}/day?include_adult=false&language=pt-BR`)

    if(!data) {
      console.log("Error ao conectar com api")
      return;
    }

    return data
  },
})

export default requestsAll