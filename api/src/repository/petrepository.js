import { con } from './conection.js';

export async function pet ( pet ){
    const comando = 
    `insert into tb_pet(nm_pet)
	             value(?);
    `
    const resposta  = await con.query(comando, [pet.nome]);
    
    return resposta;
}


export async function consultarPet(){
    const comando = 
    `select id_pet      id,
            nm_pet      nome
        from tb_pet;
    `

    const resposta = await con.query(comando);
    return resposta;
}
