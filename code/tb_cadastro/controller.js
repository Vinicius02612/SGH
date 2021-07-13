const express = require('express')
const router = express.Router()

const user= require('../tb_cadastro/modelCadastro')

router.get("/admin/user", (req, res) =>{
  res.render("admin/user")
})

//rotas para cadastrar o usuário...
router.post("/cadastrar/save",(req, res)=>{
    var name = req.body.name
    var surName = req.body.surName
    var email = req.body.email
    var password = req.body.password
  
    user.create({
      name:name,
      surName:surName,
      email:email,
      password:password
  }).then(()=>{
    res.redirect("/")
  })
     
})

router.get("/admin/login", (req, res) =>{
  res.render("admin/login")
})

module.exports = router