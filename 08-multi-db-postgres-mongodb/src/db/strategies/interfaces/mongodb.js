const ICrud = require('./interfaceCrud')
const Mongoose = require('mongoose')
Mongoose.set("strictQuery", false);
const STATUS = {
    0: "Disconectado",
    1: "Conectado",
    2: "Conectando",
    3: "Disconectando"
}

class MongoDB extends ICrud{
    constructor(strategy){
        super()
        this._herois = null
        this._driver = null
    }

    isConnected(){
        
        const state = STATUS[connection.readyState]
        if(state === 'Conectado')return true;
    }

    defineModel(){
        this._herois = new Mongoose.Schema({
            nome:{
                type: String,
                required:true
            },
            poder:{
                type: String,
                required: true
            },
            insertedAt:{
                type: Date,
                default: new Date()
            }
        })
        
        const model = Mongoose.model('heroi', heroiSchema)
    }

    connect(){
        Mongoose.connect('mongodb://joaovitor:root@localhost:27017/herois',
            {
                useNewUrlParser: true

            }, function (error) {
                if (!error) return;
                console.log('Falha na conexao ', error)
            })

        const connection = Mongoose.connection
        connection.once('open', ()=>console.log('database rodando!!'))
    }



    async create(item){
        const resultCadastrar = await model.create({
            nome:'Batman',
            poder:'Dinheiro'
        })
        console.log('Resultado', resultCadastrar)
    }
}

module.exports = MongoDB