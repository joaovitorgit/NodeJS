/*
Obter um usuário
Preciso obter o número de telefone de um usuário a partir de seu ID
Obter o endereço do usuário pelo id
*/

function getUser(callback){
    setTimeout(function(){
        return callback(null, {
            id: 01,
            nome: 'joao',
            dataNascimento: new Date()
        })
    },1000);
}

function getPhone(userId, callback){
    setTimeout(function(){
        return callback(null, {
            phone : '123123',
            ddd: '11'
        })
    }, 2000)
}

function getAddress(userId, callback){
    setTimeout(()=>{
        return callback(null,{
            nomeRua: 'rua',
            numero: '12312'
        })
    },2000);

}

function resolverUsuario(erro, user){
    console.log('Usuario ', user );
}

getUser(function resolverUsuario(erro, user){
    if(erro){
        console.log('Erro em usuário!', error);
        return;
    }

    getPhone(user.id , function resolverTelefone(error1, telefone){
        if(error1){
            console.log('Erro em telefone', error1);
        }

        getAddress(user.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.log('Erro em endereço', error2);
            }

            console.log(`
            Nome: ${user.nome},
            Telefone: ${telefone.phone},
            Endereço: ${endereco.nomeRua}
        `)
        })
    });
});
// const phone = getPhone(user.id);

// console.log('phone ', phone);