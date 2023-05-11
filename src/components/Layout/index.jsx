/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useLocation } from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TheatersIcon from '@mui/icons-material/Theaters';
import { MovieContext } from "../../context/Movies/MovieContext"
import { IMAGE_PATH } from "../../plugins/configs/config"
import requestsMovie from "../../plugins/services/movie/requests"

import { 
  Container, 
  Content, 
  Header, 
  Navbar, 
  OtherOptions,
  Hero,
  InfoMovies 
} from "./styles"



export default function Layout({ children }) {

  const { allDataMovie } = useContext(MovieContext)
  const [ dataMovieHeho, setDataMovieHero ] = useState(null)
  const { pathname } = useLocation()
  const { setHero } = requestsMovie()


  setTimeout(() => {
    if (allDataMovie.results.length > 0) {
      setHero(allDataMovie.oneID)
        .then(response => {
          if(!response) return;
          return setDataMovieHero(response)
        })
          .catch(err => err)
    }
  }, 800)

  return(
    <Container>
      <Header
        className={`layout ${pathname === '/login' ? 'none' : ''}`}
      >
        <Link
          to={"/"}
        >
          <img 
            src="/img/logo.svg" 
            alt="Logo"
          />
        </Link>
        <Navbar>
          <ul>
            <li>
              <Link 
                className={`link ${ pathname === '/series' ? 'active' : ''}`}
                to={"/series"}
              >
                Séries
              </Link>
            </li>
            <li>
              <Link 
                to={"/filmes"}
                className={`link ${pathname === '/filmes' || pathname === '/'? 'active' : ''}`}
              >
                Filmes
              </Link>
            </li>
          </ul>
        </Navbar>
        <OtherOptions>
          <Button 
            variant="text"
            className="fix-svg"
          >
           <SearchIcon />
          </Button>
            <Button
              variant="text"
              className="fix-svg button-meio"
            >
              <FilterAltIcon />
            </Button>
            <Link to={"/login"}>Login</Link>
        </OtherOptions>
      </Header>
      <Hero
        image={dataMovieHeho !== null ? 
          `${IMAGE_PATH}/original/${dataMovieHeho.backdrop_path}` : 
          'https://doc.aljazeera.net/wp-content/uploads/2018/04/watch-intro-on-demand.jpg?resize=540%2C320'}
        >
        {
          dataMovieHeho !== null ?
            <InfoMovies>
              <h1>{ dataMovieHeho.title }</h1>
              <small>
                {dataMovieHeho.runtime} min |
                {
                  dataMovieHeho.genres.map(item => {
                    return (<span key={item.id}> { item.name } </span>) 
                  }) 
                }| 
                <span>
                  { dataMovieHeho.release_date }
                </span>
               </small>
              <div className="stickts">
                <img 
                  src="/img/star.svg"
                  alt="Svg de uma estrela"
                />
                <span>
                  { Math.ceil(dataMovieHeho.vote_average) } / 10
                </span>
                <div>
                  <span>
                    IMDb
                  </span>
                </div>
              </div>
              <p>
                { dataMovieHeho.overview }
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
            </InfoMovies>  :
            <h2>Carregando as informações</h2>
        }
      </Hero>
      <Content>
        { children }
      </Content>
    </Container>
  )
}