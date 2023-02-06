const assert = require('assert')
const MongoDb = require('./../src/db/strategies/mongoDbStrategy')
const Context = require('./../src/db/strategies/base/contextStrategy')
const MOCK_HEROI_CADASTRAR = {
    nome: 'Hulk',
    poder: 'Força'
};

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Magneto',
    poder: 'magnetismo'
};
let MOCK_HEROI_ATUALIZAR_ID = '';
const context = new Context(new MongoDb())

describe('MongoDB Suite de testes', function () {
    this.beforeAll(async () => {
        await context.connect()
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

   
})