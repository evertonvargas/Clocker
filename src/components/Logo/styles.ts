import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 50px;
  }

  div{
    margin-left: 10px;

    h1, p{
      font-family: "Roboto", sans-serif;
    }

    h1{
      font-size: 28px;
      line-height: 28px;
      color: var(--white);
    }

    p{
      font-size: 13px;
      color: var(--gray);
    }
  }

  
`