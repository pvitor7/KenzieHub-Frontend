import "./styles.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm({});
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    axios.
    post("https://kenziehub.herokuapp.com/sessions", data)
    .then((response) => {
      history.push("/list")
      console.log(response.data.token)
      console.log(response.data.user.id)
      // localStorage.setItem("kezieHub", JSON.stringfy(response));

    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="loginPage">
      <img src="./../../Logo.svg" />

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title-login">Login</h2>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </div>

        <div className="field">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
        </div>

        <button className="btn-login"
        onClick={onSubmit}>Entrar</button>

        <p className="register-message">Ainda não possui uma conta?</p>
        <button className="btn-register-login" onClick={() => history.push("/register")}>Cadastre-se</button>
      </form>
    </div>
  );
};

export default Login;
