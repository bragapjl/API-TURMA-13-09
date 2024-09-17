import con from "./connection.js";

export async function inserirTurma(turma) {
    const comando = `
    insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
            values(?, ?, ?, ?, ?, ?)
    `
    let resposta = await con.query(comando, [turma.nome, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao])
    let info = resposta[0];

    return info.insertID;
}


export async function consultarTurma() {
    const comando = `
    select id_turma         id,
    nm_turma                nome,
    ds_curso                curso,
    nr_ano_letivo           ano_letivo,
    qtd_capacidade          capacidade,
    bt_ativo                ativo,
    dt_inclusao             inclusao
    from tb_turma
    `;
    
    let resposta = await con.query(comando);
    let registros = resposta[0]

    return registros;
}

export async function alterarTurma (id, turma) {
    const comando = `
    uptade tb_turma
        set nm_turma = ?,
        ds_curso = ?,
        nr_ano_letivo = ?,
        qtd_capacidade = ?,
        bt_ativo = ?
        dt_inclusao = ?
    where id_turma = ?;        
`

let resposta = await con.query(comando, [turma.nome, turma.curso, turma.ano_letivo, turma.capacidade, turma.ativo, turma.inclusao, id])
let info = resposta[0];

return info.affectedRows;
}

export async function removerTurma(id){
    const comando = `
    delete from tb_turma
    where id_turma = ?
`

let resposta = await con.query(comando, [id]);
let info = resposta[0];

return info.affectedRows;

}