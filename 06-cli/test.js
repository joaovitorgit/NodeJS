const{
    deepEqual,
    ok
} = require('assert');

const DEFAULT_ITEM_CADASTRAR = {nome:'flash', poder:"speed", id:1  };
const database = require('./database');

before(async()=>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
})

describe('Suite de manipulação de heróis', ()=>{
    it('Deve pesquisar um heroi usando arquivos', async()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id);
        // const posicaoUm = resultado[0];

        deepEqual(resultado, expected);
    })
    it('Deve cadastrar um heroi usando arquivos', async()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual(actual, expected);
    })
    it.only('Deve remover um heroi por id', async()=>{
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual(resultado, expected);
    })
})
