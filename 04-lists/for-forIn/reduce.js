const {obterPessoas} = require('./service');

Array.prototype.mnyReduce = function(callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index = 0; index <= this.length-1; index ++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}


async function main(){
    try {
       const {
            results
       }  = await obterPessoas('a');
       const alturas = results.map(item=> parseFloat(item.height));
       console.log(alturas);
       const total = alturas.mnyReduce((anterior, proximo)=>{
            return anterior + proximo;
       },0)
       console.log('total: ', total);
    } catch (error) {
        console.error('Erro:', error);
    }
}

main();