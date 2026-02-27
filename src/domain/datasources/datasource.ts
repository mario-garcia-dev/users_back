import { UserEntity } from "../entities/UserEntity";

export abstract class Datasource {

    abstract createUser( user: UserEntity ): Promise<UserEntity>;

    abstract getUsers(): Promise<UserEntity[]>;

    abstract getUserById( id: number ): Promise<UserEntity>;

    abstract updateUser( user: UserEntity ): Promise<UserEntity>;

    abstract deleteUser( id: number ): Promise<UserEntity>;

}