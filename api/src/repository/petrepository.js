import {con} from './conection.js'

export async function inserirpet(pet){
    const comando=
    `INSERT INTO id_pet(id_pet, nm_pet)
    VALUES(?,?)`
    const resp = await con.query[comando, pet.nome]
    return pet;
}

export async function listarpet(id){
    const comando=
    'SELECT id_pet      id'
        'nm_pet         nome'
        'from tb_pet'
        const [ linhas] = await con.query
        return pet;
}