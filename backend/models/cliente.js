//importando pacote
const mongoose = require("mongoose");

//definindo o schema
const clienteSchema = mongoose.Schema({
  nome: {type: String, required: true}, //not null
  fone: {type: String, required: false, default: '00000000'}, //se botar nulo entra o valor defaul
  email: {trype: String, required: true}
});


//criamos o modelo associado ao nome cliente e exportamos
//tornando acessivel para outros modulos da aplicacao
module.exports = mongoose.model("Cliente", clienteSchema);
