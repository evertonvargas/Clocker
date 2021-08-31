import styled from "styled-components"

interface RadioBoxProps{
  isActive: boolean;
}

export const Container = styled.button<RadioBoxProps>`
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  width: 150px;
  background: ${props=> props.isActive ? "#181B23" : "var(--green)"};
  color: ${props=> props.isActive ? "#434552" : "#fff"};

  transition: filter .2s;

  &:hover{
    filter: brightness(0.9);
  }
`
