import styled from "styled-components"

export const Container = styled.div`
  .fix-svg {
    color: #F6F6F6 !important;
  }

  @media(max-width: 700px) {
    .fix-header-desktop {
      display: none;
    }
  }

  @media(min-width: 701px) {
    .fix-header-mobile {
      display: none;
    }
  }
`

export const HeaderDesktop = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100%;
  height: 80px;
  backdrop-filter: blur(9px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const Navbar = styled.nav`
  ul {
    display: flex;
  }

  ul li {
    margin: 0 10px;
  }
  
  ul li .link {
    color: #fff;

  }

  .active {
    background-color: #747474;
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

export const HeaderMobile = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100%;
  height: 80px;
  backdrop-filter: blur(9px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const DialogContainer = styled.div`
  form {
    position: relative;
    width: 100%;

    input[type=text] {
      width: 100%;
      padding: 5px;
    }
    
    .button-form {
      position: absolute;
      background-color: transparent;
      top:5px;
      right: 6px;
      border: none;
      outline: none;
      border-radius: 50%;

      svg {
        width: 20px;
        height: 20px;
      }

    }
  }
`

export const Results = styled.div`
  margin-top: 50px;

  .results-desktop {
    @media(max-width:600px) {
      display: none;
    }
  }
  .results-mobile {
    @media(min-width:601px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  width: 100%;
`

