const { 
    readFile
} = require('fs')

const { promisify } = require('util')

const readFileAsyinc = promisify(readFile);


//outra forma de pegar os dados do json seria
// const dadosJson = require('./herois.json');

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsyinc (this.NOME_ARQUIVO, 'utf-8');
        return JSON.parse(arquivo.toString());
    }

    escreverArquivo(){

    }
    
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(element=> (id? element.id === id: true));
        return dadosFiltrados;
    }

}

module.exports = new Database()