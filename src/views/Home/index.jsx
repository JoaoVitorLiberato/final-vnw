
import { useContext, useState } from "react"
import CardPosters from "../../components/CardPosters"
import { MovieContext } from "../../context/Movies/MovieContext"
import { IMAGE_PATH_POSTER } from "../../plugins/configs/config"
import Carousel from 'react-elastic-carousel';
import { useCurrentWidth } from 'react-socks';
import { useLocation } from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TheatersIcon from '@mui/icons-material/Theaters';
import { IMAGE_PATH_BANNER } from "../../plugins/configs/config"
import requestsAll from "../../plugins/services/movie/requests"
import { transformArr } from "../../plugins/helpers/tranformArrAndCut"

import {
  Container,
  ContainerMovies,
  ContainerSeries,
  Hero,
  InfoMovies,
  LoadingMSG
} from "./styles"

export default function Home() {
  const { allDataMovie, allDataSeries } = useContext(MovieContext)
  const [dataMovieHeho, setDataMovieHero] = useState(null)
  const { setHero } = requestsAll()

  const width = useCurrentWidth()
  const { pathname } = useLocation()

  const heroMovie = allDataMovie.results.slice(0, 1)
  const heroSerie = allDataSeries.results.slice(0, 1)


  setTimeout(() => {
    if (allDataMovie.results.length > 0) {
      setHero(pathname === "/filmes" || pathname === "/" ? "movie" : "tv",
        pathname === "/filmes" || pathname === "/" ? heroMovie[0].id : heroSerie[0].id)
        .then(response => {
          if (!response) return;
          return setDataMovieHero(response)
        }).catch(err => err)
    }
  }, 800)

  return (
    <Container>
      <Hero
        image={dataMovieHeho !== null ?
          `${IMAGE_PATH_BANNER}/original/${dataMovieHeho.backdrop_path}` :
          'https://doc.aljazeera.net/wp-content/uploads/2018/04/watch-intro-on-demand.jpg?resize=540%2C320'}
      >
        {
          dataMovieHeho !== null ?
            <InfoMovies>
              <h1>{dataMovieHeho.title}</h1>
              <small>
                {dataMovieHeho.runtime} min |
                {
                  dataMovieHeho.genres.map(item => {
                    return (<span key={item.id}> {item.name} </span>)
                  })
                }|
                <span>
                  {dataMovieHeho.release_date}
                </span>
              </small>
              <div className="stickts">
                <img
                  src="/img/star.svg"
                  alt="Svg de uma estrela"
                />
                <span>
                  {transformArr(dataMovieHeho.vote_average, 3)} / 10
                </span>
                <div>
                  <span>
                    IMDb
                  </span>
                </div>
              </div>
              <p>
                {dataMovieHeho.overview}
              </p>
              <div className="content-button">
                <div className="button">
                  <PlayArrowIcon />
                  <span>
                    Assitir Agora
                  </span>
                </div>
                <div className="button">
                  <TheatersIcon />
                  <span>
                    Trailer
                  </span>
                </div>
              </div>
            </InfoMovies> :
            <LoadingMSG>
              Carregando as informações
            </LoadingMSG>
        }
      </Hero>
      <h2>Últimos lançamentos.</h2>
      {
        (pathname === "/filmes" || pathname === "/") &&
        <ContainerMovies>
          <Carousel
            itemsToShow={width <= 950 ? 1 : 5}
            pagination={false}
          >
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
                      year={transformArr(item.release_date, 4)}
                    />
                  </div>
                )) : <h2>Sem filmes</h2>
            }
          </Carousel>
        </ContainerMovies>
      }
      {
        pathname === "/series" &&
        <ContainerSeries>
          <Carousel
            itemsToShow={width <= 950 ? 1 : 5}
            pagination={false}
          >
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
      }
      <h2>Em alta</h2>
    </Container>
  )
}