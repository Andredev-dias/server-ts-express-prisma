import { Router, Request, Response  } from "express";
import userController from "./controllers/user";

const routes = Router();

// rota de teste, hello world
routes.get("/", (req : Request, res : Response) : any => {
  return res.send(`rota de teste`);
});

//  rota que retorna um json, uma lista nomeada items
routes.get("/funcionarios", (req : Request, res : Response) : any => {
  return res.json({
    items: [
      {
        id: "01",
        nome: "Andre",
        cargo: "Dev",
        idade: 30,
        custoPorHora: 120.0,
        temLicenca: false,
      },
      {
        id: "02",
        nome: "Beto",
        cargo: "CTO",
        idade: 45,
        custoPorHora: 560.0,
        temLicenca: true,
      },
      {
        id: "03",
        nome: "Carmen",
        cargo: "Chefe",
        idade: 89,
        custoPorHora: 1890.0,
        temLicenca: true,
      },
    ],
  });
});

routes.post("/users", (req: Request, res: Response) : any => userController.create(req, res))

routes.get("/users", (req: Request, res: Response) : any => userController.read(req, res)) 

routes.put("/users/:id", (req: Request, res: Response) : any => userController.update(req, res))

routes.delete("/users/:id", (req: Request, res: Response) : any => userController.delete(req, res)) 

routes.post("/login", (req: Request, res: Response) : any => userController.login(req, res))


export default routes;
