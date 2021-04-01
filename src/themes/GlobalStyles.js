import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

    /* Reset Style */
    *,*::after,*::before{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:'Nunito Sans', sans-serif;
        
    }

    /* Adding global HTML Styles */
    html{
        scroll-behavior:smooth;
        font-size:14px;
        
    }


    body{
        background-color:${({ theme }) => theme.bodyBackground};
        color:${({ theme }) => theme.text};
        transition:all .2s;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const Loading = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default GlobalStyle;
