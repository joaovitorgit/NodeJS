const assert = require('assert')
const MongoDb = require('./../src/db/strategies/mongodb/mongoDbStrategy')
const Context = require('./../src/db/strategies/base/contextStrategy')
const HEROI_SCHEMA = require('../src/db/strategies/mongodb/schemas/heroisSchema')
const MOCK_HEROI_CADASTRAR = {
    nome: 'Hulk',
    poder: 'Força'
};

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Magneto',
    poder: 'magnetismo'
};
let MOCK_HEROI_ATUALIZAR_ID = '';

let context = 
describe('MongoDB Suite de testes', function () {
    this.beforeAll(async () => {
        const connection = MongoDb.connect()
        context = new Context(new MongoDb(connection,HEROI_SCHEMA))
        const result = await context.create(MOCK_HEROI_ATUALIZAR)
        MOCK_HEROI_ATUALIZAR_ID = result._id
    })
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        console.log('RESULTADO:',result)

        assert.deepEqual(result, expected)
    })
    it('cadastrar', async () => {
        const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        
        assert.deepEqual({ nome, poder }, MOCK_HEROI_CADASTRAR)
    })
    it('Listar', async()=>{
        const [{nome, poder}]  = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
        const result = {
            nome, poder
        }
        assert.deepEqual(result,MOCK_HEROI_CADASTRAR)
    })
    it('Atualizar', async()=>{
        const result = await context.update(MOCK_HEROI_ATUALIZAR_ID , {nome: 'Iron-man'})
        assert.deepEqual(result.nModified, 1)
    })
    it('Remover', async()=>{
        const result = await context.delete(MOCK_HEROI_ATUALIZAR_ID)
        assert.deepEqual(result.n, 1)
    })

    
   
})