import { pet,consultarPet } from '../repository/petrepository.js';

import { Router } from 'express'

const server = Router();

server.post('/pet', async (req,resp)=> {
    try {
        const adicionarPet = req.body;

        const petAdicionado = await pet(adicionarPet)

        resp.send( adicionarPet)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/pet/consultar' , async (req,resp)=>{
    try{
        const x = await consultarPet()
        resp.send(x);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

