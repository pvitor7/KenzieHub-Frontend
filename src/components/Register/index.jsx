import "./styles.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import { PageFormsMobile, StyledForm, StyledSection, StyledSelect } from "./style";

const cadastradoAPI = {
  name: "zezin",
  email: "zezin@brabo.kz",
  password: "012345",
  contact: "zezinBrabin",
  module: "Quarto módulo (Backend Avançado)",
  course_module: "Quarto módulo (Backend Avançado)",
  bio: "eu",
};

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatorio!")
      .min(5, "São necessárias pelo menos 5 letras!"),
    email: yup.string().required("Email obrigatório!").email("Email inválido!"),
    password: yup
      .string()
      .required("Senha inválida!")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*.&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "É necessário pelo menos uma letra minúscula, uma letra maiúscula, um número, um caractere especial (!@#$%^&?.) e ter ao menos 8 caracteres!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferente da original!"),

    contact: yup
      .string()
      .required("Campo obrigatorio!")
      .min(8, "São necessárias pelo menos 8 caracteres!"),

    bio: yup
      .string()
      .required("Campo obrigatorio!")
      .min(10, "São necessárias pelo menos 10 letras!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      
  };

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
            className="input-register-user"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            className="input-register-user"
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>

        <div className="field">
          <label>Senha</label>
          <input
            className="input-register-user"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>

        <div className="field">
          <label>Confirmar Senha</label>
          <input
            className="input-register-user"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>

        <div className="field">
          <label>Contato:</label>
          <input
            className="input-register-user"
            type="text"
            placeholder="Telefone ou rede social"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </div>

        <div className="field">
          <label>Bio:</label>
          <input
            className="input-register-user"
            type="text"
            placeholder="Sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </div>

        <div className="field">
          <label>Selecionar modulo</label>

          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
            <span>{errors.course_module?.message}</span>
          </select>
        </div>

        <button className="btn-register">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
