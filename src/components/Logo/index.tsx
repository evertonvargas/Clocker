import { useTheme } from "../../hook/useTheme";
import { Container } from "./styles";

export function Logo() {
  const { theme } = useTheme();

  return (
    <Container>
      <img src={theme.title === "light" ? "/images/clockBlue.svg" : "/images/clock.svg"} alt="icon clock" />
      <div>
        <h1>Clocker</h1>
        <p>calendar blocker</p>
      </div>
    </Container>
  );
}
