//criando tabelas no banco

const Sequelise = require('sequelize')
const connection = require('../databases/databases')

const tb_instituto = connection.define('tb_instituto', {
  name:{
    type:Sequelise.STRING,
    allowNull:false
  },
  category:{
    type:Sequelise.STRING,
    allowNull:false
  },
  cnpj:{
    type:Sequelise.REAL(14),
    allowNull:false
  },
  endereco:{
    type:Sequelise.STRING,
    allowNull:false
  },
  bairro:{
    type:Sequelise.STRING,
    allowNull:false
  },
  cidade:{
    type:Sequelise.STRING,
    allowNull:false
  },
  estado:{
    type:Sequelise.STRING,
    allowNull:false
  },
  CEP:{
    type:Sequelise.REAL(9),
    allowNull:false
  },
  numero:{
    type:Sequelise.INTEGER,
    allowNull:false
  },
  complemento:{
    type:Sequelise.STRING,
    allowNull:false
  },
  telefone_celular:{
    type:Sequelise.STRING,
    allowNull:false
  },
  telefone_fixo:{
    type:Sequelise.STRING,
    allowNull:false
  },
  email:{
    type:Sequelise.TEXT,
    allowNull:false
  }
})

module.exports = tb_instituto
