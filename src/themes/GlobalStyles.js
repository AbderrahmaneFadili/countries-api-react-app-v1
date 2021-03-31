import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;500;600;800&display=swap');

    /* Reset Style */
    *,*::after,*::before{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    /* Adding global HTML Styles */
    html{
        scroll-behavior:smooth;
        font-size:${({ theme }) => theme.homePageFontSize};
        font-family:${({ theme }) => theme.fontFamily}
    }


    body{
        background-color:${({ theme }) => theme.bodyBackground};
        color:${({ theme }) => theme.text};
        transition:all .4s;
        
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export default GlobalStyle;
