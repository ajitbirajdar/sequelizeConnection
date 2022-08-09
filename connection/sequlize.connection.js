const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });

const sequelize = new Sequelize('studentdb', 'root', '', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  sequelize.authenticate().then(()=>{ // testing connection 
    console.log('Connected with db using sequelize')
  }).catch((err)=>{
    console.log(err.message)
  });

  module.exports=sequelize;

