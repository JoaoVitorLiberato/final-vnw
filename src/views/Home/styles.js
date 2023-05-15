import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 18px;
    color: #fff;
    text-shadow: 0px 3px 6px #00000069;
    padding: 25px 115px 15px;
    transform: translateY(25px);
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


  h1 {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }

  small {
    position: absolute;
    top: 50px;
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
    margin-bottom: 20px;
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

export const ContainerMovies= styled.div`
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

export const ContainerSeries= styled.div`
  color: #fff;

  button {
    background-color: transparent;
    box-shadow: none;

    &:hover {
      outline: none;
      background-color: transparent;
    }
  }
`
