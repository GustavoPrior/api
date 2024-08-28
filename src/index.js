const express = require("express");

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    const users = [];
    this.express.post("/users",(req,res)=>{
      const {id, nome, email, senha} = req.body;
      users.push({id,nome,email,senha});
      res.status(200).send({message:"Usuário cadastrado com sucesso"});
    });

    this.express.post("/auth",(req,res)=>{
        const {email, senha} = req.body;
        const auth = users.find((auth) => auth.email == email && auth.senha == senha);
        if(auth){
           res.status(200).send({message:"Usuário autenticado com sucesso"});
        }
        else{
            res.status(400).send({message: "Usuário e senha nao encontrado" });
        }
      });
  
    this.express.get("/users/:id",(req,res)=>{
      const{id} = req.params;
      const user = users.find(user => user.id == id);
      if(user){
        res.status(200).send(user);
      }
      else{
        res.status(400).send({message: "Usuário nao encontrado" });
      }
    });



    this.express.get("/health/", (req, res) => {
      res.send({ nome: "Gustavo Pereira Prior",
       idade:"17",
       cpf:"04883877523" });
    });
  }
}


module.exports = new AppController().express;