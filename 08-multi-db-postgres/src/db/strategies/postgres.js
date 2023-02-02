const ICrud = require('././interfaces/interfaceCrud')
const  Sequelize  = require('sequelize');


class Postgres extends ICrud{
    constructor(strategy){
        super()
        this.driver = null
        this._herois = null
        this.connect()
    }

    async isConnected(){
        try {
            await this.driver.authenticate()
            return true
        } catch (error) {
            console.log('Fail', error)
            return false
        }
    }
    

    async create(item){
        const {dataValues} = await this._herois.create(item);
        return dataValues
    }

    async defineModel(){
        this._herois = this.driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome:{
                type:Sequelize.STRING,
                required:true
            },
            poder:{
                type:Sequelize.STRING,
                required:true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps:false
        })
        await this._herois.sync()
    }

    async connect(){
        this.driver = new Sequelize(
            'heroes',
            'joaovitor',
            'root',
            {
                host:'localhost',
                dialect:'postgres',
                quoteIdentifiers:false,
                operatorAliases:false
            }
        )
        await this.defineModel()

    }
}


module.exports = Postgres