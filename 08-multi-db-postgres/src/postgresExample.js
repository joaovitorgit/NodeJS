// para instalar o sequelize
// npm install sequelize 
// para instalar os drivers do postgres
// install pg-hstore pg

const  Sequelize  = require('sequelize');

const driver = new Sequelize(
    'heroes',
    'erickwendel',
    'minhasenhasecreta',
    {
        host:'localhost',
        dialect:'postgres',
        quoteIdentifiers:false,
        operatorAliases:false
    }
)

driver
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// async function main(){
//     const Herois = driver.define('herois', {
//         id: {
//             type: Sequelize.INTEGER,
//             required: true,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nome:{
//             type:Sequelize.STRING,
//             required:true
//         },
//         poder:{
//             type:Sequelize.STRING,
//             required:true
//         }
//     }, {
//         tableName: 'TB_HEROIS',
//         freezeTableName: false,
//         timestamps:false
//     })
//     await Herois.sync()

//     const result = await Herois.findAll({raw: true})
//     console.log(result)
// }   

// main()