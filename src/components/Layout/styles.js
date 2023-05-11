import styled from "styled-components"

export const Container = styled.div`
  .fix-svg {
    color: #F6F6F6 !important;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 80px;

  position: fixed;
  background-color: #1C1C1C;
  opacity: .8;
  backdrop-filter: blur(9px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .none {
    display: none;
  }
`

export const Navbar = styled.nav`
  ul {
    display: flex;
  }

  ul li {
    margin: 0 10px;
  }
  
  ul li .link {
    color: #F6F6F6;

  }

  .active {
    background-color:  #F6F6F6;
    color: #000 !important;
    padding: 10px 30px;
    border-radius: 20px;
  }
`

export const OtherOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: #F6F6F6;
  }

  .button-meio {
    margin: 0 15px;
  }
`

export const Hero = styled.div`
    width: 100%;
    height:100vh;
    background-image: url(${props => props.image});
    background-size:cover;
    background-repeat:no-repeat;

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

  position: relative;
  top: 55vh;
  left: -80px;

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
export const Content = styled.div`
  width: 100%;
`