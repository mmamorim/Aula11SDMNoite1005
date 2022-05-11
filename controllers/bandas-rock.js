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
    res.status(200).json(db.data.bandasrock);
  },
  post: function (req, res) {
    console.log("recebi requisição...");
    let { id, name, country, style } = req.body;
    db.data.bandasrock[id] = { id, name, country, style };
    db.write();
    res.status(200).json(db.data.bandasrock);
  },
  put: function (req, res) {
    console.log("recebi requisição update...", req.body);
    let { id, name, country, style } = req.body;
    db.data.bandasrock[id] = { id, name, country, style };
    db.write();
    res.status(200).json(db.data.bandasrock);
  },
  delete: function (req, res) {
    console.log("recebi requisição remove...", req.body);
    let id = req.body.id;
    delete db.data.bandasrock[id];
    db.write();
    res.status(200).json(db.data.bandasrock);
  },
}

export default controller;