//importar dependência sqlite3
const sqlite3 = require("sqlite3").verbose()

//criando o objeto que irá fazer as operações
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizando o objeto
// db.serialize(() => {
//     //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             email TEXT, 
//             phone TEXT
//         );
//     `)

//     //inserir dados
//     const query = `
//         INSERT INTO users (
//             name, 
//             email, 
//             phone
//         ) VALUES (?, ?, ?);
//     `

//     const values = [
//         "Daniel Almeida",
//         "dani@mail.com",
//         "(98)98484-0515"
//     ]
    
//     function afterInsertData(err) {
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //consultar dados
//     db.all(`SELECT * FROM users`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Seus registros:")
//         console.log(rows)
//     })

//     //deletar dados
//     // db.run(`DELETE FROM users WHERE id = ?`, [1], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso!")
//     // })
// })