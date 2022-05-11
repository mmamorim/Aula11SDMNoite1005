
import config from "config"
import express from "express"
import cors from "cors"
import auth from "./auth.js"

console.log("Abrindo super hiper servidor...");

let port = config.get("server.port");
//console.log("porta: ",porta);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/auth",(req,res) => {
    console.log("recebi requisição POST /auth");
    let username = req.body.username
    let password = req.body.password
    if(username != auth.username) {
        res.status(400).json({ error: "Authentication fail: username invalid"})
    } else {
      if(password != auth.password) {
          res.status(400).json({ error: "Authentication fail: password invalid"})    
      } else {
          res.status(200).json({ msg:"ok", token: auth.generateToken() })
      }    
    }

})


import bandRoute from "./routes/bandas-rock.js"
bandRoute(app,config)
import filmesRoute from "./routes/filmes.js"
filmesRoute(app,config)


app.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`)
});

