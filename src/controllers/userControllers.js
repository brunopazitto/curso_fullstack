const mongoose = require('mongoose');
const User = mongoose.model('User');

/*assincrono */
module.exports = {
   async persistData(req,res){
        const response = await req.body;
        User.create(response);
        res.json(response);
    },
    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    
    async listaUm(req,res){
        const response = await User.findById('5ed05906527523364c6a9386');
        res.json(response);
    },
    //Pesquisar com o campo vindo da URL
    
    //Pesquise todos do sexo f
    async listaSex(req,res){
        const response = await User.find({'sexo' : 'F'})
        res.json(response)
    },

    //Todos que tem menos que X anos
    async idadeMenor(req,res){
        const response = await User.find({idade : {$lt: 90}})
        res.json(response)
    }
}