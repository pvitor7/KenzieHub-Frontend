import "./styles.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { PageFormsMobile, StyledForm, StyledSection, StyledSelect } from "./style";

const Register = () => {
  const { register, handleSubmit } = useForm({});

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    axios.
    post("https://kenziehub.herokuapp.com/users", data)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))

  };

  const cadastradoAPI =  {
    "name": "zezin",
    "email": "zezin@brabo.kz",
    "password": "012345",
    "contact": "zezinBrabin",
    "module": "Quarto módulo (Backend Avançado)",
    "course_module": "Quarto módulo (Backend Avançado)",
    "bio": "eu"
}


  return (
    <div className="registerPage">
      <section className="registerPage-header">
        <img src="./../../Logo.svg" />
        <button className="btn-back" onClick={() => history.push("/")}>
          Voltar
        </button>
      </section>

      <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title-register">Crie sua conta</h2>
        <p className="register-message">Rápido e grátis, vamos</p>

        <div className="field">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
        </div>

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

        <div className="field">
          <label>Confirmar Senha</label>
          <input
            // type="password"
            // placeholder="Digite novamente sua senha"
            // {...register("confirmPassword")}
          />
        </div>

        <div className="field">
          <label>Contato:</label>
          <input
            type="text"
            placeholder="Telefone ou rede social"
            {...register("contact")}
          />
        </div>

        <div className="field">
          <label>Bio:</label>
          <input
            type="text"
            placeholder="Sobre você"
            {...register("bio")}
          />
        </div>

        <div className="field">
          <label>Selecionar modulo</label>

          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)" />
            <option value="Segundo módulo (Frontend Avançado)" />
            <option value="Terceiro módulo (Introdução ao Backend)" />
            <option value="Quarto módulo (Backend Avançado)" />
            </select>
        </div>

        <button className="btn-register">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
