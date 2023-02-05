const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/interfaces/mongodb')
const Postgres = require('./db/strategies/interfaces/postgres')
const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create()
const contextMongo2 = new ContextStrategy(new Postgres());
contextMongo2.create()

