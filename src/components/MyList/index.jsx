import "./styles.css";
import { useHistory } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { RegisterTechnology } from "../RegisterTechnology";
import { CardTechnology } from "../CardTechnology";
import EditDeleteCard from "../EditDeleteCard";

const MyList = ({ }) => {
  const history = useHistory();
  const [visibleRegister, setVisibleRegister] = useState(false);
  const [visibleEditCard, setVisibleEditCard] = useState (false);
  const [idCard, setIdCard] = useState();
  const [list, setList] = useState([]);
  const [userApi, setUserApi] = useState([]);

  const user = JSON.parse(sessionStorage.getItem("kenzieHubUser"));
  const userToken = JSON.parse(localStorage.getItem("kenzieHubLogin"));

  const updateList = () => {
    axios
    .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
    .then((response) => {
      setList(response.data.techs);
      setUserApi(response.data.techs)
    });
  };

  useEffect(() => { updateList()}, []);


  return (
    <div  onClick={updateList}>
      {visibleRegister === true && (
        <RegisterTechnology setVisibleRegister={setVisibleRegister} userToken={userToken} updateList={updateList} setVisibleEditCard={setVisibleEditCard}/>
      )}

      { visibleEditCard == true && <EditDeleteCard id={idCard} setVisibleEditCard={setVisibleEditCard} updateList={updateList} />}

      <div className="page-mylist">
        <section className="listpage-header">
          <img src="./../../Logo.svg" />
          <button className="btn-back-list" onClick={() => history.push("/")}>
            Sair
          </button>
        </section>

        <div className="field-list">
        <h2 className="listpage-title">Olá, {user.name}</h2>
        <p className="list-module">{user.course_module}</p>
        </div>

        <h3 className="listpage-h3">
          Tecnologias
          <button
            className="btn-techplus"
            onClick={() => {
              setVisibleRegister(true);
            }}
          >
            +
          </button>
        </h3>

        <ul className="list-tech">
          {list.map((element, index) => {

            return (
              <CardTechnology setVisibleEditCard={setVisibleEditCard}  id={element.id} title={element.title} status={element.status} setList={setList} key={index} setId={setIdCard} updateList={updateList}/>  
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyList;
