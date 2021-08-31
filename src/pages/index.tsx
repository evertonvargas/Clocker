import { useFormik } from "formik";
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
  const formik = useFormik({
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched.email && formik.errors.email && 'borderError'}`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}

              <label className="space">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your secret password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched.password && formik.errors.password && 'borderError'}`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}

              <div className="space">
                <label>clocker.work/</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${formik.touched.username && formik.errors.username && 'borderError'}`}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className="error position">{formik.errors.username}</div>
              ) : null}
              <button type="submit" className="space">Entrar</button>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
