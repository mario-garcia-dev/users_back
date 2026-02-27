import { Datasource, Repository, UserEntity } from "../../domain";

export class RepositoryImplementation implements Repository {

    constructor(
        private readonly datasource: Datasource
    ) {}

    createUser(user: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    getUsers(): Promise<UserEntity[]> {
        return this.datasource.getUsers();
    }

    getUserById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    updateUser(user: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}