import { Request, Response } from "express";
import { Repository } from '../../domain/repositories/repository';
import { GetUsers } from '../../domain/use-cases/get-users';
export class UsersController {
    constructor(
       private readonly repository: Repository
    ) {}

    // CRUD
    public createUser = () => {

    }

    public getUsers = (req: Request, resp: Response) => {
        new GetUsers(this.repository)
            .execute()
            .then(users => resp.json(users));
    }

    public getUserById = () => {

    }

    public updateUser = () => {

    }

    public deleteUser = () => {

    }
}