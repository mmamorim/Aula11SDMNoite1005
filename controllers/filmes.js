import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile("./banco.json")
const db = new Low(adapter)

db.read().then(function () {
    console.log("banco carregado");
}).catch(function (e) {
    console.log(e);
})

const controller = {

  get: function (req, res) {
    //console.log(db.data);
    res.status(200).json(db.data.filmes);
  },
  post: function (req, res) {
    console.log("recebi requisição...");
    let { id, name } = req.body;
    db.data.filmes[id] = { id, name };
    db.write();
    res.status(200).json(db.data.filmes);
  },
  put: function (req, res) {
    console.log("recebi requisição update...", req.body);
    let { id, name } = req.body;
    db.data.filmes[id] = { id, name };
    db.write();
    res.status(200).json(db.data.filmes);
  },
  delete: function (req, res) {
    console.log("recebi requisição remove...", req.body);
    let id = req.body.id;
    delete db.data.filmes[id];
    db.write();
    res.status(200).json(db.data.filmes);
  },
}

export default controller;