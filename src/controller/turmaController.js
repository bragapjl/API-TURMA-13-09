import * as db from '../repository/turmaRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/turma', async (req,resp) => {
    try {
        let registros = await db.consultarTurma()
        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/turma/' , async (req,resp) => {
    try {
        let turma = req.body;

        let id = await db.inserirTurma(turma);

        resp.send({
            novoId: id
        })

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })      
    }
})

endpoints.put('/turma/:id' , async (req,resp) =>{
    try {
        let id = req.params.id;
        let registros = req.body;

        let linhasAfetadas = await db.alterarTurma(id , registros)

        if(linhasAfetadas >=1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })
    }
})

endpoints.delete('/turma/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let linhasAfetadas = await db.removerTurma(id);

        if(linhasAfetadas >= 1 ){
            resp.send()
        } 
        else {
            resp.status(404).send({
                erro: 'nenhum registro encontrado!'
            })
        }

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.massage
        })        
    }
})


export default endpoints;