const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db")

//config pasta public
server.use(express.static("public"))

//habilita uso da req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurando rotas
server.get("/", (req, res) => {
    //console.log(req.query)

    return res.render("index.html")
})

server.post("/save", (req, res) => {
    //console.log(req.body)
    //inserir dados
    const query = `
        INSERT INTO users (
            name, 
            email, 
            phone
        ) VALUES (?, ?, ?);
    `

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        return res.render("index.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get("/users", (req, res) => {
    //consultar dados
    db.all(`SELECT * FROM users`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        //retorna dados do banco no HTML
        return res.render("users.html", { users: rows, total })
    })
})

//ligar servidor
server.listen(3000)