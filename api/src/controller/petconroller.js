import {router} from 'express'
const server = router();

server.post ('pet' , async(req,resp) => {
    try{
        const petnovo = req.body;
        const petinserido = await inserirpet(novopet);
        resp.status(400).send
    }
    catch(err){
        resp.status(400).send({
            erro:'ocorreu erro'
        })
    }
});
server.get ('pet/id:' , async(req,resp) =>{
    try{
        const id = Number (rq, params,id);
        const resposta = await inserirnovo(id)
        if(resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro:'ocorreu erro'
        })
    }
});