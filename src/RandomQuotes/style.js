import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Main = styled.main`
  width: 600px;
  height: 300px;
  background-color: #ECEDEF;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Phrase = styled.p`
  font-size: 20px;
`

export const Quote = styled.span`

`

export const Img = styled.img`
  width: 18px;
  margin: 0px 15px 0px 15px;

`

export const Author = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 17px;
  font-weight: 600;
`

export const Button = styled.button`
  margin-top: 25px;
  background-color: #CE4B7C;
  color: #FFF;
  border: none;
  border-radius: 8px;
  padding: 5px 8px;
  transition: 0.9ms;
  cursor: pointer;

  &:hover {
    background-color: #89386F;
  }
`