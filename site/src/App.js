
import {clintePet, listarTodosPets} from '../src/api/petApi'

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [pets,setPets]= useState([]);


  async function carregarTodosPets(){
    const resposta= await listarTodosPets();
    setPets(resposta);
  };

  useEffect(()=> {
    carregarTodosPets();
  }, []);


  async function salvarClick(){
    try {
      const r = await clintePet(nome)
      alert('Pet cadrastrado')
    } catch (err) {
      alert(err.response.data.erro)
    }
  }

  return (
    <div className="App">
      <div className='text'>
        <label>Cadrastrar pet</label>
        <br/>
        <input type="text" value={nome} onChange={e=> setNome(e.target.value)}/>
        <br/>
        <button onClick={salvarClick}>Cadrastrar</button>
      </div>
      
      <div className='divtb'>
        <table className='tabela'>
          <thead className='cabeca'>
            <th>id pet</th>
            <th>nome do pet </th>
          </thead>
          <tbody>
            {pets.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
              </tr>
            )}       
          </tbody>
        </table>
      </div>
    </div>
      
  );
}

export default App;
