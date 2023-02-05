const ICrud = require('./interfaceCrud')

class MongoDB extends ICrud{
    constructor(strategy){
        super()
    }

    create(item){
        console.log('O item foi salvo no mongoDb')
    }
}

module.exports = MongoDB