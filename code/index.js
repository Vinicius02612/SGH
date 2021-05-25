const express = require('express')
const app = express();
const connection = require('./databases/databases')

const tb_instituto = require('./tbInstituicao/modelInstituto')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/", (req, res)=>{
  res.send("<h1>Hello Word<h1>")
});

//conectando ao banco de dados
connection
      .authenticate()
      .then(()=>{
           console.log("conexão com banco de dados estabelecida")
      }).catch((error)=>{
          console.log(error)
        }
      
      )

app.listen(8080, ()=>{
    console.log("servidor executano com sucesso...")
})