/*
Obter um usuário
Preciso obter o número de telefone de um usuário a partir de seu ID
Obter o endereço do usuário pelo id
*/
const util = require('util');
const obterEnderecoAsync = util.promisify(getAddress);

function getUser() {
    return new Promise((function resolvePromisse(resolve, reject) {
        setTimeout(function() {
            return resolve({
                id: 01,
                nome: 'joao',
                dataNascimento: new Date()
            })
        }, 1000);
    }))

}

function getPhone(userId) {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(function() {
            return resolve({
                phone: '123123',
                ddd: '11'
            })
        }, 2000);
    })

}

function getAddress(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'rua',
            numero: '12312'
        })
    }, 2000);

}

main()
async function main(){
    try{
        console.time('medida-promise');
        const usuario = await getUser()

        const resultado = await Promise.all([getPhone(usuario.id),obterEnderecoAsync(usuario.id) ])
        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`Nome:${usuario.nome}, Telefone:${telefone}, Endereço:${endereco.rua}`);
        console.timeEnd('medida-promise');
    }
    catch(error){
        console.log("Deu erro"+error);
    }
}


// const usuarioPromise = getUser();
// usuarioPromise.
// then(function(usuario) {
//         return getPhone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function(resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco;
//     })
//     .then(function(resultado) {
//         console.log('resultado', resultado);
//     })
//     .catch(function(error) {
//         console.error('Deu ruim', error);
//     })

// getUser(function resolverUsuario(erro, user){
//     if(erro){
//         console.log('Erro em usuário!', error);
//         return;
//     }

//     getPhone(user.id , function resolverTelefone(error1, telefone){
//         if(error1){
//             console.log('Erro em telefone', error1);
//         }

//         getAddress(user.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.log('Erro em endereço', error2);
//             }

//             console.log(`
//             Nome: ${user.nome},
//             Telefone: ${telefone.phone},
//             Endereço: ${endereco.nomeRua}
//         `)
//         })
//     });
// });
// const phone = getPhone(user.id);

// console.log('phone ', phone);