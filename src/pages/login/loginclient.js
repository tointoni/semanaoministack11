import React, { useState } from 'react';

import '../../css/login.css';

import api from '../../services/api';

import logoImg from '../../../src/img/logo.png';
import VoltarImg from '../../img/voltar.webp';

import { Link, useHistory } from 'react-router-dom';


export default function LoginClient() {
    const history = useHistory();

    
        document.title = 'Login'
      

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
   
            const response = await api.post('/sign-client', { email, password })
            const {name} = response.data;
            const status = response.data.status;

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('clientname', name);

           //alert(`Seu token é:${response.data.token}`);

            alert(`${status}`);
            console.log(response);
            console.log(name);
            console.log(response.data.token);

            if (response.data.token){
                history.push('/dashclient')
            }
    }

    return (
        <div>
            <div className="cabe">
                <div className="conte">
                    <img src={logoImg} alt="Técnicos 24H" width="60" />
                    <h4>Técnicos 24H</h4>
                </div>
            </div>

            <div className="voltar">
                <Link to="/"><img src={VoltarImg} width="15" alt="voltar" /></Link>
                <Link to="/"><button>Voltar</button></Link>
            </div>
            

            <div className="formular">

            <Link to="/sign-company" className="linkq">Logar como Empresa</Link>

                <form onSubmit={handleLogin}>
                    <label className="email" htmlFor="email">Email</label>
                    <input 
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        type="email"  
                        required 
                        />

                    <label className="senha" htmlFor="senha">Senha</label>
                    <input 
                        name="senha"
                        id="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                        required 
                        />
                        <Link to="/cadastro" className="linkw">Não tem uma conta?</Link>
                    <button type="submit">Logar</button>
                </form>
            </div>
        </div>
    );
}