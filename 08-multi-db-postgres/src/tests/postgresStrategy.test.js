const assert = require('assert');
const Postgres = require('../db/strategies/interfaces/postgres');
const Context = require('../db/strategies/base/contextStrategy');


const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Thor',
    poder: 'Trovao'
}
const MOCK_HEROI_ATUALIZAR = {
    nome: 'Superman',
    poder: 'Deus'
}

describe('Postgres Strategy', function(){
    this.timeout(Infinity)
    this.beforeAll(async function(){
        await context.connect()
        await context.delete()
        await context.create(MOCK_HEROI_ATUALIZAR)
    })
    it('PostgreSQL Connection', async function(){
        const result  = await context.isConnected()
        assert.equal(result, true)
    })
    it('Cadastrar', async function(){
        const {nome, poder} = await context.create(MOCK_HEROI_CADASTRAR)
        const result = {nome, poder}
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('Listar', async function(){
        const [{nome, poder}] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
        const result = {nome, poder}
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
    })
    it('Atualizar', async function(){
        const [itemAtualizar] = await context.read({nome: MOCK_HEROI_ATUALIZAR.nome})
        const novoItem =  {
            ...MOCK_HEROI_ATUALIZAR,
            nome:"Mulher maravilha"
        }
        const [result] = await context.update(itemAtualizar.id, novoItem)

        const [itemAtualizado] = await context.read({id:itemAtualizar.id})
    
        assert.deepEqual(result, 1)
        assert.deepEqual(itemAtualizado.nome, novoItem.nome)
    })
    it('Remover por id', async function(){
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result,1)
    })
})