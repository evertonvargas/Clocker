import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonHourProps{
  children: ReactNode;
  type?: string
}

export function ButtonHour({type,children}: ButtonHourProps){
  return(
    <Container
    // isActive={type === "busy"}
    isActive={type === "busy"}
    >
      {children}
    </Container>
  );
}