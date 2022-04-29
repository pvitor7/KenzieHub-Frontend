import "./styles.css";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {


  const history = useHistory();
  
  const schema = yup.object().shape({
    email: 
      yup.string().required("Email obrigatório!").email("Email inválido!"),
    password: 
      yup.string().required("Senha inválida!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*.&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "É necessário pelo menos uma letra minúscula, uma letra maiúscula, um número, um caractere especial (!@#$%^&?.) e ter ao menos 8 caracteres!"
      )
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  
        
    const onSubmit = (data) => {
      axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        setUser(response);
        sessionStorage.setItem(
          "kenzieHubUser",
          JSON.stringify(response.data.user)
          );

          localStorage.setItem(
          "kenzieHubLogin",
          JSON.stringify(response.data.token)
        );
        history.push("/list");
      });
    };
   
    const [user, setUser] = useState({});

    const userToken = JSON.parse(localStorage.getItem("kenzieHubLogin"));
    if(userToken != null) {return <Redirect to="/list" />}

  return (
    <div className="loginPage">
      <img src="./../../Logo.svg" />

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title-login">Login</h2>

        <div className="field-login">
          <label>Email</label>
          <input
          className="input-login"
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div className="field-login">
          <label>Senha</label>
          <input
          className="input-login"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>

        <button className="btn-login" onClick={onSubmit}>
          Entrar
        </button>

        <p className="register-message">Ainda não possui uma conta?</p>
        <button
          className="btn-register-login"
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </button>
      </form>
    </div>
  );
};

export default Login;
