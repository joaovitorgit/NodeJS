const ICrud = require('./interfaceCrud')
const  Sequelize  = require('sequelize');
const { where } = require('sequelize');


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

    async update(id, item){
        return this._herois.update(item, {where:{id:id}})
    }

    async read(item ={}){
         return this._herois.findAll({where: item, raw:true})
    }
    async delete(id){
        const query = id ? {id}:{}
        return this._herois.destroy({where: query})
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