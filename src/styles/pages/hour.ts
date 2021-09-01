import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  section{
    align-self: center;

    div.rectangle{
      background: var(--bg-modal);
      border-radius: 10px;
      margin-top: 40px;

      div.hours{
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
        row-gap: 15px;
      }
    }
  }
`
