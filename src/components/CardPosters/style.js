import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 263px;
  background-color: #000;
  margin: 20px 5px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 1px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 230px;
  display: block;
  padding-bottom: 5px;
`

export const Title = styled.span`
display: block;
  font-size: 12px;
`

export const Year = styled.small`
  font-size: 9px;
`