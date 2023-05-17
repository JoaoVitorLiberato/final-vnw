/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import CardPosters from "../../components/CardPosters"
import { MovieContext } from "../../context/Movies/MovieContext"
import { IMAGE_PATH_POSTER } from "../../plugins/configs/config"
import Carousel from 'react-elastic-carousel'
import { useLocation } from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import TheatersIcon from '@mui/icons-material/Theaters'
import { IMAGE_PATH_BANNER } from "../../plugins/configs/config"
import requestsAll from "../../plugins/services/movie/requests"
import { transformArr } from "../../plugins/helpers/tranformArrAndCut"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import {
  Container,
  Hero,
  Nav,
  InfoMovies,
  LoadingMSG,
  ContainerUltimosLancamentos,
  ContainerEmAlta,
  Pagination
} from "./styles"

export default function Home() {
  const [dataHero, setDataHero] = useState(null)
  const { allData, trending } = useContext(MovieContext)

  const { setHero } = requestsAll()
  const { pathname } = useLocation()
  
  useEffect(() => {
    setTimeout(() => {
      if ("results" in trending && trending.results.length > 0) {
        const hero = trending.results.slice(0, 1)
        setHero(pathname === "/filmes" || pathname === "/" ? "movie" : "tv",
          hero[0].id)
          .then(response => {
            if (!response) return;
            return setDataHero(response)
          }).catch(err => err)
      }
    }, 1000)
  }, [trending, pathname])

  return (
    <Container>
      <Hero
        image={dataHero !== null ?
          `${IMAGE_PATH_BANNER}/original/${dataHero.backdrop_path}` :
          'https://doc.aljazeera.net/wp-content/uploads/2018/04/watch-intro-on-demand.jpg?resize=540%2C320'}
      >
        {
          dataHero !== null ?
            <InfoMovies>
              <h1>{dataHero.title ? dataHero.title : dataHero.name}</h1>
              <small>
                {dataHero.runtime} min |
                {
                  dataHero.genres.map(item => {
                    return (<span key={item.id}> {item.name} </span>)
                  })
                }|
                <span>
                  {transformArr(dataHero.release_date ? dataHero.release_date : dataHero.first_air_date, 4)}
                </span>
              </small>
              <div className="stickts">
                <img
                  src="/img/star.svg"
                  alt="Svg de uma estrela"
                />
                <span>
                  {transformArr(dataHero.vote_average ? dataHero.vote_average : dataHero.popularity, 3)} / 10
                </span>
                <div>
                  <span>
                    IMDb
                  </span>
                </div>
              </div>
              <p>
                {dataHero.overview}
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
      <Nav>
        <ul>
          <li><a>Popular</a></li>
          <li><a>Drama</a></li>
          <li><a>Ação</a></li>
          <li><a>Aventura</a></li>
          <li><a>Comédia</a></li>
          <li><a>Crime</a></li>
          <li><a>Fantasia</a></li>
          <li><a>Família</a></li>
          <li>
            <Button
              variant="text"
              className="fix-svg"
            >
              <SearchIcon />
            </Button>
          </li>
        </ul>
      </Nav>
      <h2>Últimos lançamentos</h2>
      <ContainerUltimosLancamentos>
        <Carousel
          itemsToShow={6}
          pagination={false}
        >
          {
            trending.results &&
            trending.results.map(item => (
              pathname === "/filmes" || pathname === "/" ?
                <div
                  key={item.id}
                >
                  <CardPosters
                    image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                    altImage="Imagem de posters"
                    title={item.title}
                    year={transformArr(item.release_date, 4)}
                  />
                </div> :
                <div
                  key={item.id}
                >
                  <CardPosters
                    image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                    altImage="Imagem de posters"
                    title={item.title ? item.title : item.name}
                    year={transformArr(item.release_date, 4) ? transformArr(item.release_date, 4) : transformArr(item.first_air_date, 4)}
                  />
                </div>
            ))
          }
        </Carousel>
      </ContainerUltimosLancamentos>
      <h2>Em alta</h2>
      {
        allData.results &&
        <ContainerEmAlta>
          {
            pathname === "/filmes" || pathname === "/" ?
              allData.results.map(item => (
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
              )) :
              allData.results.map(item => (
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
              ))
          }
        </ContainerEmAlta>
      }
      <Pagination>
        <div
          className="content"
        >
          <button>
            <ArrowBackIosNewIcon />
          </button>
          <div
            className="btn-value"
          >
            {
              ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map(item => (
                <button
                  key={`button-${item}`}
                >
                  {item}
                </button>
              ))
            }
          </div>
          <button>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </Pagination>
    </Container>
  )
}