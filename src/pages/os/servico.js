import React, { useState } from "react";
import api from '../../services/api'

import Delete from '../../img/trash-2.svg';
import Edit from '../../img/edit-2.svg';

import { Link } from 'react-router-dom';

import '../../css/serv.css';

function Servico(props) {

  const { servico } = props;

  const [incidents, setIncidents] = useState([]);

  const token = localStorage.getItem('token');

  async function handleDeleteIncident(_id) {
    try {
      const response = await api.delete(`deletservice/${_id}`, {
        headers: {
          token,
        }
      });

      const status = response.data.status;
      alert(`${status}`)

      setIncidents(incidents.filter(servico => servico._id !== _id));

    } catch {

    }
  }

  return (
    <li className="dev-item">
      <header>
        <div className="user-info">
          <strong>{servico.title}</strong>
          <span>{servico.description}</span>
          <p className="userphone">{servico.userPhone}</p>
          <Link className="userName"><p className="user-name">{servico.userName}</p></Link>
        </div>
        <div className="conteiner-grid">
          <img className="delete" src={Delete} title="Deletar" onClick={() => handleDeleteIncident(servico._id)} />
          <Link to="/updateservice" className="edit"><img className="img-edit" src={Edit} title="Editar" /></Link>
        </div>
      </header>
    </li>
  );
}

export default Servico;
