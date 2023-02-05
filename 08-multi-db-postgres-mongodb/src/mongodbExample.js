
const Mongoose = require('mongoose')


Mongoose.set("strictQuery", false);
Mongoose.connect('mongodb://joaovitor:root@localhost:27017/herois', 
{
    useNewUrlParser: true
    
}, function(error){
    if(!error)return ;
    console.log('Falha na conexao ', error)
})

const connection = Mongoose.connection


connection.once('open', ()=>console.log('database rodando!!'))

setTimeout(()=>{
    const state = connection.readyState
    console.log('state', state)
},1000)

/*
    0: disconectado
    1: conectado
    2: conectando
    3: disconectando
*/

const heroiSchema = new Mongoose.Schema({
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

async function main(){
    const resultCadastrar = await model.create({
        nome:'Batman',
        poder:'Dinheiro'
    })
    console.log('Resultado', resultCadastrar)

    const listItems = await model.find()
    console.log('Items: ', listItems)
}

main()