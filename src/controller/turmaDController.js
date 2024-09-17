import * as db from '../repository/turmaRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/turmaD', async (req,resp) => {
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