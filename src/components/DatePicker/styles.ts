import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px 15px;

    button{
      display: flex;
      align-items: center;
      margin: 0 8px;
      background: var(--bg-modal);
      color: var(--gray)
    }

    p{
        color: var(--gray);
        font-size: 13px;
      }
`