import React, { useState } from "react"
import styled from "styled-components"
import Home from "./RandomQuotes/RandomQuotes"
import List from "./ListQuotes/ListQuotes"

export default function App() {

    const [isShownHome, setIsShownHome] = useState(true)
    const [isShownList, setIsShownList] = useState(false)

    const handleClick = (e) => {
        setIsShownHome(current => !current)
        setIsShownList(current => !current)
    }

    const handleText = () => {
        switch (isShownHome === true && isShownList === true) {
            case isShownHome:
                return 'Random Phrases'
            case isShownList:
                return 'Phrase List'
            default:
                break;
        }
    }

    return (
        <>
            <Nav>
                <Button onClick={() => handleClick()}>
                    {handleText()}
                </Button>
            </Nav>
            {
                isShownHome && <Home />
            }
            {
                isShownList && <List />
            }
        </>
    )
}

export const Nav = styled.nav`
    display: block;
    width: 100%;
    height: 56px;
    background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)),  url('../img/fundo-principal2.jpg');
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Button = styled.button`
    margin-right: 40px;
    padding: 5px 8px;
    background-color: #CE4B7C;
    border-radius: 8px;
    color: #FFF;
    border: none;
    transition: 0.9ms;
    cursor: pointer;

  &:hover {
    background-color: #89386F;
  }
`