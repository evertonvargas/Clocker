import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 20px 0;

  background: var(--background);
  color: var(--gray);
  font-weight: bold;
  font-size: 12px;

  img{
    padding: 2px 5px 0 0;
    width: 18px;
  }
`