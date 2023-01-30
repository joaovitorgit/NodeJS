const { 
    readFile,
    writeFile
} = require('fs')

const { promisify } = require('util')

const readFileAsyinc = promisify(readFile);
const writeFileAsyinc = promisify(writeFile);

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

    async escreverArquivo(dados){
        await writeFileAsyinc(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true;
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo();
        const id = heroi.id <= 2? heroi.id : Date.now();
        const heroiComId = {
            id,
            ...heroi
        }
        const dadosFinal = [...dados, heroiComId];
        const resultado = await this.escreverArquivo(dadosFinal);
        return resultado
    }
    
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(element=> (id? element.id === id: true));
        return dadosFiltrados;
    }

    async remover(id){
        if(!id){
            return await this.escreverArquivo([]);
        }
        const dados = await this.obterDadosArquivo()
        const index = dados.findIndex(item=> item.id === parseInt(id));
        if(index === -1){
            throw Error('O usuário informado não existe');
        }
        dados.splice(index, 1);
        return await this.escreverArquivo(dados);

    }

}

module.exports = new Database()