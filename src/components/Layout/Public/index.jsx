/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useLocation } from "react-router-dom"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from "@mui/icons-material";
import DialogMenu from "../../DialogMenu";
import CardPosters from "../../CardPosters";
import { IMAGE_PATH_POSTER } from "../../../plugins/configs/config";
import Carousel from 'react-elastic-carousel';
import requestsAll from "../../../plugins/services/movie/requests";

import {
  Container,
  Content,
  HeaderDesktop,
  Navbar,
  OtherOptions,
  HeaderMobile,
  DialogContainer,
  Results
} from "./styles"



export default function LayoutPublic({ children }) {
  const { pathname } = useLocation()
  const [ menu, setMenu ] = useState(false)
  const [ input, setInput ] = useState("")
  const [ stateResultSearch, setStateResultSearch ] = useState([])
  const { searchTitle } = requestsAll()

  const handleOpenMenu = () => {
    return setMenu(true)
  }

  const search = async (segment, input) => {
    const response = await searchTitle(segment, input)
    
    if(!("results" in response)) {
      console.log("Filme ou Serie não encontrada!");
    }

    return response.results
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault()

    if(input === "") return;

    const response = await search(
      pathname === "/filmes" || pathname === "/" ? "movie" : "tv",
      input
    )

    console.log("Pesquisa encontrada!")

    setInput("")
    return setStateResultSearch(response)
  }

  return (
    <Container>
      <HeaderDesktop
        className="fix-header-desktop"
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
                className={`link ${pathname === '/series' ? 'active' : ''}`}
                to={"/series"}
              >
                Séries
              </Link>
            </li>
            <li>
              <Link
                to={"/filmes"}
                className={`link ${pathname === '/filmes' || pathname === '/' ? 'active' : ''}`}
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
            onClick={() => setMenu(true)}
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
      </HeaderDesktop>
      <HeaderMobile
        className="fix-header-mobile"
      >
        <Link
          to={"/"}
        >
          <img
            src="/img/logo.svg"
            alt="Logo"
          />
        </Link>
        <Button 
          variant="text" 
          className="fix-svg"
          size="large"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </Button>
      </HeaderMobile>
      <DialogMenu
        open={menu}
        close={() => setMenu(false)}
      >
        <DialogContainer>

          <form
            onSubmit={handleSearchSubmit}
          >
            <input 
              type="text"
              placeholder="Nome do Filme"
              onChange={e => setInput(e.target.value)}
            />
            <button
              className="button-form"
              type="submit"
            >
              <Search />
            </button>
          </form>
          <Results>
            <div
              className="results-mobile"
            >
                <Carousel
                  itemsToShow={1}
                  pagination={false}
                >
                  {
                    stateResultSearch ?
                    stateResultSearch.map(item => (
                      <CardPosters
                        key={item.id}
                        image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                        altImage="Imagem de posters de filmes"
                        title={item.title}
                        year={item.release_date}
                      />
                    )) :
                    <h2>Not</h2>
                    
                  }
                </Carousel>
            </div>
            <div
              className="results-desktop"
            >
              <span>
                Pesquisa sobre: { input }
              </span>
              <Carousel
                itemsToShow={5}
                pagination={false}
              >
                {
                  stateResultSearch ?
                  stateResultSearch.map(item => (
                    <CardPosters
                      key={item.id}
                      image={`${IMAGE_PATH_POSTER}${item.poster_path}`}
                      altImage="Imagem de posters de filmes"
                      title={item.title}
                      year={item.release_date}
                    />
                  )) :
                  <h2>Not</h2>
                  
                }
              </Carousel>
            </div>
          </Results>
        </DialogContainer>
      </DialogMenu>
      <Content>
        {children}
      </Content>
    </Container>
  )
}