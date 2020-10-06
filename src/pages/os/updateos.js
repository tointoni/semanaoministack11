import React, {  useState,useEffect } from 'react';

import api from '../../services/api';

export default function Upadate(){

    const [ser, setSer] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('token');

    async function handleUpdate(e){
        e.preventDefault();
    
        const response = await api.get('/listservice/', {headers:{token}});
        const status = response.data.status;
        alert(`${status}`);

        console.log(response.data);
    }


    useEffect(() => {
      async function loadServicos() {
          const response = await api.get("/listservice/", { headers: { token } });

          console.log(response.data);
          setSer(response.data);
      }

      loadServicos();
  }, [token]);

    async function handleAltera(_id) {
        try {
          const response = await api.put(`/updatservice/${_id}`, {title, description}, {
            headers: {
              token,
            }
          });

          const status = response.data.status;
          alert(`${status}`);
    
          setSer(ser.filter(serv => serv._id !== _id ));
          
        } catch {
          
        }
      }

    return(
        <div>
        
        <form onSubmit={handleUpdate}>
            <label>Titulo:<input value={title} onChange={e => setTitle(e.target.value)} placeholder={ser.title} /></label><br/>        
            <label>Descrição:<input value={description} onChange={e => setDescription(e.target.value)} placeholder={ser.description} /></label><br/> 

            <button type="submit" onClick={() => handleAltera(ser._id)}>Alterar</button>       
        </form>
        </div>
    );
}