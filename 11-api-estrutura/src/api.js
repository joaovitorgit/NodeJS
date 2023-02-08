// npm install hapi 

const Hapi = require('hapi');
const Context = require('./db/strategies/base/contextStrategy')
const Mongodb = require('./db/strategies/mongodb/mongoDbStrategy')
const HeroiSchema = require('./db/strategies/mongodb/schemas/heroisSchema')
const HeroRoute = require('./routes/heroRoutes')

const app = new Hapi.Server({
    port:5000
})

function mapRoutes(instance, methods){
    
    return methods.map(method => instance[method]())
}

async function main(){
    const connection = Mongodb.connect()
    const context = new Context(new Mongodb(connection, HeroiSchema))
    app.route([
        ...mapRoutes(new HeroRoute(context), HeroRoute.methods())
    ])

   return app
}

module.exports = main()