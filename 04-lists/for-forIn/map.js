const service = require('./service');

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for(let index = 0; index <= this.length-1; index++){
        const resultado = callback(this[index], index);
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main(){
    try {
        const results  = await service.obterPessoas('a');
        const names = []
        results.results.forEach(element => {
            names.push(element.name);
        });

        const newNames = results.results.meuMap(element=>element.name)

        console.log(newNames);

    } catch (error) {
        console.error('Deu ruim', error);
    }
}

main()