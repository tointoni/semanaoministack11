import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/serv.css';

function Allservice(props) {

    const { servico } = props;

    return (
        <div>
            <li className="dev-item">
                <header>
                    <div className="user-info">
                        <strong>{servico.title}</strong>
                        <span>{servico.description}</span>
                        <p className="userphone">{servico.userPhone}</p>
          <p className="user-name">{servico.userName}</p>
                    </div>
                </header>
            </li>
        </div>
    );
}

export default Allservice;