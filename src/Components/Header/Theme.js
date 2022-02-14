import {createGlobalStyle} from "styled-components"

export const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headingColor: "lightblue",
    opacity: 0.6,
}

export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    headingColor: "#d23669"
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};
 }`