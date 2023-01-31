const ICrud = require('./../interfaces/interfaceCrud')

class Postgres extends ICrud{
    constructor(strategy){
        super()
    }

    create(item){
        console.log("O item foi salvo no postgres")
    }
}


module.exports = Postgres