import { createGlobalStyle } from "styled-components";

export const GlogalStyle = createGlobalStyle`
  :root{
    --background: ${props => props.theme.colors.background};
		--white: ${props => props.theme.colors.white};
		--gray: ${props => props.theme.colors.gray};
    --bg-modal: ${props => props.theme.colors.bgmodal};
    --pink: ${props => props.theme.colors.pink};
    --green: ${props => props.theme.colors.green};
    --dark: ${props => props.theme.colors.dark};
    --border: ${props => props.theme.colors.border};
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93,75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87,5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

	body, input, textarea, select, button, p{
  	font-family: "Roboto", sans-serif;
  	font-weight: 400;
  	font-size: 1rem;
	}

  button{
  	cursor: pointer;
	}

  a{
    color: inherit;
    text-decoration: none;
  }
`;
