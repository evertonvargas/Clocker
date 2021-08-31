import { useFormik } from "Formik";
import * as yup from "yup";

import Head from "next/head";
import { DarkMode } from "../components/DarkMode";
import { Logo } from "../components/Logo";

import { Container } from "../styles/pages/home";


const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento Obrigatório"),
  password: yup.string().required("Preechimento obrigatório").min(6, "A senha deve ter no mínimo 6 caracteres"),
  username: yup.string().required("Preechimento obrigatório"),
});

export default function Home() {
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    onSubmit: () => {},
    validationSchema,
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });

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
            <form>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${touched.email && errors.email && 'borderError'}`}
              />
              {touched.email && errors.email ? (
                <div className="error">{errors.email}</div>
              ) : null}

              <label className="space">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your secret password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${touched.password && errors.password && 'borderError'}`}
              />
              {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ) : null}

              <div className="space">
                <label>clocker.work/</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${touched.username && errors.username && 'borderError'}`}
                />
              </div>
              {touched.username && errors.username ? (
                <div className="error position">{errors.username}</div>
              ) : null}
              <button type="submit" className="space" onClick={()=>handleSubmit}>Entrar</button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
