import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
//   font-family: 'StratosSkyeng', sans-serif;
  
  color: #ffffff;
  min-height: 100vh;
	width: 100%;
  

}

input, textarea {
  &:focus {
    outline: none;
}
}
`