// Carregando módulos
    const express= require('express')
    const app= express()
    const handlebars= require('express-handlebars')
    const Post = require('./models/Post')
    const Get = require('./models/Get')
    const path = require('path')

// Config
    // Config handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Pegar dados do formulario
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

    // Public
    app.use(express.static(path.join(__dirname, 'public')))

// Rotas
    // Página do cadastro
        app.get('/', (req, res) =>{
            res.render('formulario')
        })

    // Página da lista
        app.get('/lista', (req, res) =>{
            Get()
            .then(function(tabela){
                res.render('lista', {tabela: tabela})
            })
        })


    // Adiciona cadastro no banco
        app.post('/', (req, res) =>{
            Post(req.body.nome, req.body.telefone, req.body.email, req.body.idade)
            .then(function(){
                console.log("Post criado com sucesso!")
                
                // res.redirect('/', {a: '<script>alert("Visitante cadastrado com sucesso!")</script>'})
                res.render('formulario', {alerta: true})
            })
            .catch(function(erro){
                res.send("Houve um erro: " + erro)
            })
        })


// Outros
    const PORT= 8000
    app.listen(PORT, function(){
        console.log(`Entrou na porta ${PORT}`)
    })