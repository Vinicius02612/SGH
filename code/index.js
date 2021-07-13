//arquivo raiz do projeto

const express = require('express')
const app = express();
const connection = require('./databases/databases')

const tb_instituto = require('./tbInstituicao/modelInstituto')
const user = require('./tb_cadastro/modelCadastro')


controllerUser = require('./tb_cadastro/controller')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())




//conectando ao banco de dados
connection
      .authenticate()
      .then(()=>{
           console.log("conexão com banco de dados estabelecida")
      }).catch((error)=>{
          console.log(error)
        }
      
      )

      
 app.use("/",controllerUser)

 app.get("/",(req , res)=>{
   res.render("")
 })

app.listen(8080, ()=>{
    console.log("servidor executano com sucesso...")
})
