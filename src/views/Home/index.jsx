
import { useContext } from "react"
import CardPosters from "../../components/CardPosters"
import { Container, ContainerMovies, ContainerSeries } from "./styles"
import { MovieContext } from "../../context/Movies/MovieContext"
import { IMAGE_PATH_POSTER } from "../../plugins/configs/config"
import Carousel from 'react-elastic-carousel';


export default function Home() {
  const { allDataMovie, allDataSeries } = useContext(MovieContext)


  return(
    <Container>
        <ContainerMovies>
          <h2>F</h2>
          <Carousel>
            {
              allDataMovie !== null ?
              allDataMovie.results.map(item => (
                <div
                  key={item.id}
                >
                  <CardPosters
                    image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                    altImage="Imagem de posters de filmes"
                    title={item.title}
                    year={item.release_date}
                  />
                </div>
              )) : <h2>Sem filmes</h2>
            }
          </Carousel>
        </ContainerMovies>
        <ContainerSeries>
          <h2>s</h2>
          <Carousel>
            {
              allDataSeries !== null ?
              allDataSeries.results.map(item => (
                <div
                  key={item.id}
                >
                  <CardPosters
                    image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                    altImage="Imagem de posters de series"
                    title={item.title}
                    year={item.release_date}
                  />
                </div>
              )) :
              <h2>Sem series</h2>
            }
          </Carousel>
        </ContainerSeries>
    </Container>
  )
}