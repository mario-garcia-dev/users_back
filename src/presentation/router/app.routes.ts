import { Router } from "express";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // router.get("/", (req, res) => todoController.getTodos(req, res));
        router.get("/api/users", (req, resp) => {
            resp.json("Getting all users");
        });

        return router;
    }
}