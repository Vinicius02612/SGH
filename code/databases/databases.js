const  Sequelise  = require ('sequelize');
const connection = new Sequelise(
  'SGH',
  'root',
  '12345',{
    host:'localhost',
    dialect:'mysql'
  }

)

module.exports = connection;