import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
    color: #fff;
    text-shadow: 0px 3px 6px #00000069;
    padding: 25px 115px 15px;
    transform: translateY(25px);
  }
`
export const Nav = styled.nav`
  color: #fff;
  
  ul {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;

    li a {
      cursor: pointer;
    }
  }

  .fix-svg {
    color: #F6F6F6 !important;
  }
`

export const Hero = styled.div`
    width: 100%;
    height:100vh;
    background-image: url(${props => props.image});
    background-size:cover;
    background-repeat:no-repeat;
    background-position: center;

    @media(max-width: 768px) {
      background-size:contain;
      height: 400px;
    }
`

export const InfoMovies = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto ;
  color: #fff;
  transform: translateY(265px);

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .stickts {
    width: 160px;
    margin: 28px 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      background-color: #F3CD32;
      padding: 0 2px;
      span {
        font-weight: 900;
        color: #000;
      }
    }
  }

  p {
    width: 600px;
    height: 100px;
    overflow-y: scroll;
    font-size: 14px;

    ::-webkit-scrollbar{
      width: 1px;
    }
  }

  .content-button {
    display: flex;
    .button {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 15px 20px;
      border: none;
      border-radius: 15px;
      background-color: #D53A00;
      transition: all 0.5s ease-in-out;

      svg {
        width: 30px;
        height: 30px;
        padding-right: 5px;
      }

      &:hover {
        opacity: .4;
      }
    }

    .button:nth-child(2) {
      margin-left: 15px;
      background-color: #717171;
    }
  }

`
export const LoadingMSG = styled.h2`
  text-align: center;
  position: relative;
  top: 250px;
  margin: 0 250px;
  font-size: 50px;
  color: #fff;
  background-color: purple;

`

export const ContainerUltimosLancamentos = styled.div`
  padding: 0 30px 0 20px;

  button {
    background-color: transparent;
    box-shadow: none;

    &:hover {
      outline: none;
      background-color: transparent;
    }
  }
`

export const ContainerEmAlta= styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 30px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 1px;
  }
`

export const Pagination= styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  .content {
    display: flex;
    justify-content: center;

    button {
      color: #fff;
      background-color: transparent;
      padding: 10px;
      border-color: #fff;
      border-radius: 50%;
      margin: 0 5px;
    }
  }
`
