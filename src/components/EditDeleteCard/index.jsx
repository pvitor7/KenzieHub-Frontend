import "./styles.css";
import axios from "axios";
import { useForm } from "react-hook-form";

export const EditDeleteCard = ({ setVisibleEditCard, updateList, id }) => {
  const { register, handleSubmit } = useForm();
  const token = JSON.parse(localStorage.getItem("kenzieHubLogin"));

  const deleteTech = () => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateList();
        setVisibleEditCard(false);
      })
  };

  const updateCard = (data) => {
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateList();
        setVisibleEditCard(false);
      })
  };

  return (
    <div className="modal">
      <form id="form-edit-tech" 
      onSubmit={handleSubmit(updateCard)}>
        <h4 className="modal-editTech-title">Tecnologia Detalhes
             <button
          className="btn-close-tech"
          onClick={() => setVisibleEditCard(false)}
        >
          {" "}
          x{" "}
        </button>
        </h4>

        <div className="field">
          <label>Nome do projeto</label>
          <input
            className="name-edit-tech"
            type="text"
            placeholder="Ex: React"
          />
        </div>

        <div className="field">
          <label>Status</label>
          <select className="status-edit-tech" {...register("status")}>
            <option value="Inciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        <div className="field-btn">
          <button
            className="btn-edit-tech"
            type="submit"
          >
            Salvar alterações
          </button>
          <button
          type="button"
            className="btn-delete-tech"
            onClick={() => {deleteTech()}}
          >
            Excluir
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeleteCard;
