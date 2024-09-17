import * as db from '../repository/matriculaRepository.js';


endpoints.post('/aluno/' , async (req,resp) => {
    try {
        let aluno = req.body;

        let id = await db.inserirAluno(aluno);

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

export default endpoints;