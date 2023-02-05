// docker ps
// docker exec -it 1f54fb70b1f3 mongo  -u joaovitor  -p root -authenticationDatabase herois

// // databases
// show dbs
// // muda contexto para um db expecifico
// use herois 
// // mostra collections do db
// show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento :'1889-09-09'
})

// retorna dados da collection
db.herois.find()

// retorna primeiro dado da collection
db.herois.findOne()

// retorna os 1000 primeiros dados da colletion em ordem decrescente de nome
db.herois.find().limit(1000).sort({nome: -1})

// retorna apenas o campo poder de todos os registros da collection. O _id deve ser 0 pois e preciso força-lo a nao ser retornado
dh.herois.find({}, {poder:1, _id:0})


// create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento :'1889-09-09'
})

// read
db.herois.find()

// update
// Atualiza o registro, apagando os campos do objeto original
db.herois.update({_id: ObjectId("63dfac106aebfe9968a3c861")}, {nome:'Mulher Maravilha', poder:"Força"})

// Atualiza apenas o campo definido no set e mantem os restantes
db.herois.update({_id: ObjectId("63dfac106aebfe9968a3c861")}, {$set:{nome: 'Lanterna Verde'}});


// Delete
// Caso nao possua nenhuma clausula ele remove todos registros da collection
db.herois.remove({})
db.herois.remove({nome: 'Mulher Maravilha'})