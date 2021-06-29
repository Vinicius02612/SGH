const Sequelize = require('sequelize')
const connection = require('../databases/databases')


//criando  tabela de cadastro...
const user = connection.define('user',{
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  surName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  }
})

// user.sync({force:true})

module.exports = user