const BaseRoute = require('./base/baseRoute')
class HeroRoutes extends BaseRoute{
    constructor(db){
        super()
        this.db = db
    }

    list(){
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, handler)=>{
                try{
                    return this.db.read()
                }
                catch(error){
                    console.log('Um erro ocorreu no list', error)
                    return "Erro interno no servidor"
                }
            }
        }
    }
}

module.exports = HeroRoutes