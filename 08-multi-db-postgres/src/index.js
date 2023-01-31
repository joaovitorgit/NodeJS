const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/postgres')
const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create()
const contextMongo2 = new ContextStrategy(new Postgres());
contextMongo2.create()

