import { Router } from "express";
import { UsersController } from "../users/controller";
import { PostgresImplementation } from "../../infraestructure/datasources/postgresql.impl";
import { RepositoryImplementation } from "../../infraestructure/repositories/repository.impl";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        const datasource = new PostgresImplementation();
        const repository = new RepositoryImplementation(datasource);
        const usersController = new UsersController(repository);

        // router.get("/", (req, res) => todoController.getTodos(req, res));
        router.post("/api/users", usersController.createUser);
        router.get("/api/users", usersController.getUsers);
        router.get("/api/users/:id", usersController.getUserById);
        router.put("/api/users/:id", usersController.updateUser);
        router.delete("/api/users/:id", usersController.deleteUser);
        router.post("/api/auth/login", usersController.login);

        return router;
    }
}