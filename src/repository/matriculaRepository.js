import con from "./connection.js";

export async function inserirAluno(aluno) {
    const comando = `
    insert into tb_turma (nm_aluno, ds_sexo, dt_nascimento, ds_email, bt_ativo, id_turma)
            values(?, ?, ?, ?, ?, ?)
    `
    let resposta = await con.query(comando, [turma.nome, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao])
    let info = resposta[0];

    return info.insertID;
}
