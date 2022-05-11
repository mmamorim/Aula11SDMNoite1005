import controller from "../controllers/filmes.js";
import auth from "../auth.js"

const nomeRota = 'filmes';

export default function (app,config) {

const path = config.get("server.path_root") + nomeRota

  app
    .route(path).get(auth.middlewareAuth, controller.get);

  app
    .route(path).post(controller.post);

  app
    .route(path).put(controller.put);

  app
    .route(path).delete(controller.delete);

  console.log(`Rota [${nomeRota}] carregada...`);
};
