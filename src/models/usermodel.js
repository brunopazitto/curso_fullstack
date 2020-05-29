const mongoose = require('mongoose');

/*Criando o schema como se fosse a tabela do banco com os campos */
const userSchema = mongoose.Schema({
    name : String,
    login : String,
    password : {
        type : String,
        require : true,
    },
    sexo : String,
    idade : Number,
},{
    timestamps : true
});

/*Faz com que fique disponivel em outras partes do sistemas */
module.exports = mongoose.model('User',userSchema);