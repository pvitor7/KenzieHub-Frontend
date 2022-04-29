import "./styles.css";
import { useForm } from "react-hook-form";

import axios from "axios";

export const RegisterTechnology = ({
  setVisibleRegister,
  updateList
}) => {
  const { register, handleSubmit } = useForm({});

  const token = JSON.parse(localStorage.getItem("kenzieHubLogin"));

  const createTech = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateList();
      })
      .catch(() => {
        updateList();
      });
  };


  
  return (
    <div className="modal">
    <form id="form-register-tech" onSubmit={handleSubmit(createTech)}>
      <h4 className="modal-registertitle">
        Cadastrar Tecnologia{" "}
        <button
          className="btn-close-tech"
          onClick={() => setVisibleRegister(false)}
        >
          {" "}
          x{" "}
        </button>
      </h4>

      <div className="field">
        <label className="label-register-tech">Nome</label>
        <input
          className="name-register-tech"
          type="text"
          {...register("title")}
        />
      </div>

      <div className="field">
        <label className="label-register-tech">Selecionar status</label>
        <select className="status-register-tech" {...register("status")}>
          <option value="Inciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <button className="btn-register-tech" type="submit" >
        Cadastrar Tecnologia
      </button>
    </form>
    </div>
  );
};
