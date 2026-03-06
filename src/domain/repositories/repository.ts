import { CreateUserDTO } from "../dtos/users/create-user";
import { UserEntity } from "../entities/UserEntity"

export abstract class Repository {

    abstract createUser( dto: CreateUserDTO ): Promise<UserEntity>;

    abstract getUsers(): Promise<UserEntity[]>;

    abstract getUserById( id: string ): Promise<UserEntity>;

    abstract updateUser( user: UserEntity ): Promise<UserEntity>;

    abstract deleteUser( id: string ): Promise<UserEntity>;
    
}