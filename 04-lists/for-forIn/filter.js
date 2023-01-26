const {obterPessoas} = require('./service')

/*
const item = {
    nome: 'Joao',
    idade: 23
}
const {nome} = item
console.log(nome) // print 'Joao'
*/

Array.prototype.myFilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index];
        const result = callback(item,index, this)
        // 0, "", null, undefined === false
        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main(){
    try {
        const{
            results
        } = await obterPessoas(`a`);
        
        // const familiaLars = results.filter(function(item){
        const familiaLars = results.myFilter(function(item){
            // Se retornar true então é mantido no vetor, senão remove
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })

        const names = familiaLars.map(pessoa=>pessoa.name);
        console.log(names)

    } catch (error) {
        console.error('Erro:', error);
    }
}

main()