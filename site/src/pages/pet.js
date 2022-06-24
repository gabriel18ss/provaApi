import { useEffect, usEffect, useState} from 'react'
import './pet.scss'

import {inserirpet,listartodospet} from '../api/apipet'
import {pet} from '../../../api/src/repository/conection';

export default function index(){
    const[nome, setnome] = useState('');
    async function carregartodospet(){
        const resp = await listartodospet();
        setpet(resp);

    }
    useEffect(()=>{
        carregartodospet()
    }, [])
    async function salvarclick(){
        try {
            await inserirpet(nome)
            alert('pet cadastrado com sucesso') 
        }
        catch(err) {
            alert(err.response.data.erro)
        }
    }
}
return( 
    <main>
    <label> cadastrar pet </label>
    
    <input type='text' placeholder='nome do pet' value={nome} onChange={e=>setnome(a.target.value)}/>

    <div>
    <button onClick={salvarclick}>registrar</button>
    </div>

    <table>

        <thead>
            <tr>
                <td>
                     NOME PET
                </td>
            </tr>
        </thead>

    </table>
    </main>
    
)

 