const{
    deepEqual,
    ok
} = require('assert');

const DEFAULT_ITEM_CADASTRAR = {nome:'flash', poder:"speed", id:1  };
const database = require('./database');

describe('Suite de manipulação de heróis', ()=>{
    it('Deve pesquisar um heroi usando arquivos', async()=>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id);
        // const posicaoUm = resultado[0];

        deepEqual(resultado, expected);
    })
    // it('Deve cadastrar um heroi usando arquivos', async()=>{
    //      const expected = DEFAULT_ITEM_CADASTRAR

    //      ok(null, expected);
    // })
})
