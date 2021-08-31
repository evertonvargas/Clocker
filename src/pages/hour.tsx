import Head from "next/head";
import { ButtonHour } from "../components/ButtonHour";
import { DarkMode } from "../components/DarkMode";
import { Logo } from "../components/Logo";

import { Container } from "../styles/pages/hour";


export default function Hour() {

  return (
    <>
      <Head>
        <title>Hour</title>
      </Head>
      <Container>
        <DarkMode />
        <section>
          <Logo />
          <div className="rectangle">
            <p> &#60; Sábado, 23 de Outubro de 2021 &#62;</p>
            <div>
              <ButtonHour type="busy">08:00</ButtonHour>
              <ButtonHour>09:00</ButtonHour>
              <ButtonHour>10:00</ButtonHour>
              <ButtonHour>11:00</ButtonHour>
              <ButtonHour>12:00</ButtonHour>
              <ButtonHour type="busy">13:00</ButtonHour>
              <ButtonHour>14:00</ButtonHour>
              <ButtonHour>15:00</ButtonHour>
              <ButtonHour>16:00</ButtonHour>
              <ButtonHour>17:00</ButtonHour>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
