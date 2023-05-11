import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  color: #fff;
`

export const Form = styled.form`
  width: 100%;
  border: 1px solid #fff;
  padding: 20px;

 .text-fields {
    label {
      color: #fff;
      display: block;
    }

    input[type=email], input[type=password] {
      padding: 15px 10px;
      width: 100%;
      outline: none;
      margin: 15px 3px;
    }
 }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`