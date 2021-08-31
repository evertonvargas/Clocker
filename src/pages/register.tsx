import Head from "next/head";
import { DarkMode } from "../components/DarkMode";
import { Logo } from "../components/Logo";

import { Container } from "../styles/pages/register";

export default function Register() {
  return (
    <>
      <Head>
        <title>Hour Register</title>
      </Head>
      <Container>
        <DarkMode />
        <section>
          <Logo />
          <div className="rectangle">
            <p> &#60; Sábado, 23 de Outubro de 2021 &#62;</p>
            <div className="structure">
              <p className="first">08:00</p>
              <div>
                <p>Éverton Vargas</p>
                <p>(48) 9 9999-9999</p>
              </div>
            </div>

            <div className="free">
              <p>09:00 - Livre</p>
            </div>

            <div className="structure">
              <p className="first">10:00</p>
              <div>
                <p>Éverton Vargas</p>
                <p>(48) 9 9999-9999</p>
              </div>
            </div>

            <div className="free">
              <p>11:00 - Livre</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}