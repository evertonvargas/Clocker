import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { DarkMode } from "../components/DarkMode";
import { Logo } from "../components/Logo";

import { Container } from "../styles/pages/home";

interface HomeProps{
  USER_THEME: string;
}

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Login Clocker</title>
      </Head>
      <Container>
        <DarkMode />
        <section>
          <Logo />
          <p className="title">Crie sua agenda compartilhada</p>
          <div className="formLogin">
            <form action="">
              <label>E-mail</label>
              <input type="email" className="space"/>
              <label>Senha</label>
              <input type="password" className="space"/>
              <div className="space">
                <label>clocker.work/</label>
                <input type="text" />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
