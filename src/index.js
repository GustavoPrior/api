const express = require("express"); //importa o módulo Express

//Define uma classe para organizar a lógica da aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas de Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicção receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  //Define as rotas da nossa API 
  routes() {
    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res) => {
      res.send({ nome: "Gustavo Pereira Prior",
       idade:"17",
       cpf:"04883877523" });
    });//Essa rota é usada para verificar se a API está OK
  }
}

//Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;