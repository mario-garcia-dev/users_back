import { Request, Response } from "express";
import { Repository } from '../../domain/repositories/repository';
import { GetUsers } from '../../domain/use-cases/get-users';
import { CreateUser } from "../../domain/use-cases/create-user";
import { CreateUserDTO, UpdateUserDTO } from "../../domain";
import { GetUserById } from "../../domain/use-cases/get-user";
import { UpdateUser } from "../../domain/use-cases/update-user";
import { DeleteUser } from "../../domain/use-cases/delete-user";
import { Login } from "../../domain/use-cases/login";
export class UsersController {
    constructor(
       private readonly repository: Repository
    ) {}

    // CRUD
    public createUser = (req: Request, resp: Response) => {
        const [ error, dto ] = CreateUserDTO.create(req.body || {});
        
        if (error) return resp.status(400).json({error});

        new CreateUser(this.repository)
        .execute(dto!)
        .then(createdUser => resp.json(createdUser))
        .catch(error => resp.status(400).json({error}));
    }

    public getUsers = (req: Request, resp: Response) => {
        new GetUsers(this.repository)
            .execute()
            .then(users => resp.json(users))
            .catch(error => resp.status(400).json({error}));
    }

    public getUserById = (req: Request<{id: string}>, resp: Response) => {
        const id = req.params.id!;
        new GetUserById(this.repository)
            .execute(id)
            .then(user => resp.json(user))
            .catch(error => resp.status(400).json({error}));
    }

    public updateUser = (req: Request<{id: string}>, resp: Response) => {
        const id = +req.params.id!;
        const [ error, dto ] = UpdateUserDTO.update({...req.body, id});

        if (error) return resp.status(400).json({ error });

        new UpdateUser(this.repository)
            .execute(dto!)
            .then(updatedUser => resp.json(updatedUser))
            .catch(error => resp.status(400).json({error}));
    }

    public deleteUser = (req: Request<{id: string}>, resp: Response) => {
        const id = req.params.id!;
        new DeleteUser(this.repository)
            .execute(id)
            .then(deletedUser => resp.json(deletedUser))
            .catch(error => resp.status(400).json({error}));
    }

    public login = (req: Request<{}, {}, {username: string, password: string}>, resp: Response) => {
        const { username, password } = req.body;

        new Login(this.repository)
            .execute(username, password)
            .then(user => resp.json({
                message: "Logged successfully",
                userId: user.id,
                username
            }))
            .catch(error => resp.status(400).json({error}));
    }
}