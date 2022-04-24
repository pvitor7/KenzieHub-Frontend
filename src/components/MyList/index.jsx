import "./styles.css";
import { useHistory } from "react-router-dom"

const MyList = ({name, module}) => {

    const history = useHistory();

  return (
    <div>
      <section className="listpage-header">
        <img src="./../../Logo.svg" />
        <button className="btn-back" onClick={()=> history.push("/")}>Sair</button>
      </section>

        <h2 className="listpage-title">
            Olá, {name}
        </h2>
        <p>{module}</p>

    <h3>Tecnologias</h3> +

    <ul>
        {}
    </ul>

    </div>
  );
};

export default MyList;
