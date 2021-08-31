import { useTheme } from "../../hook/useTheme";
import { Container } from "./styles";

import Image from 'next/image'
import ClockDark from "../../../public/images/clock.svg"
import ClockLight from "../../../public/images/clockBlue.svg"

export function Logo() {
  const { theme } = useTheme();

  return (
    <Container>
      <Image src={theme.title === "light" ? ClockLight : ClockDark} alt="icon clock" />
      <div>
        <h1>Clocker</h1>
        <p>calendar blocker</p>
      </div>
    </Container>
  );
}
