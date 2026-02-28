import { CreateUserDTO, UpdateUserDTO, Datasource, Repository, UserEntity } from "../../domain";

export class RepositoryImplementation implements Repository {

    constructor(
        private readonly datasource: Datasource
    ) {}

    createUser(dto: CreateUserDTO): Promise<UserEntity> {
        return this.datasource.createUser(dto);
    }

    getUsers(): Promise<UserEntity[]> {
        return this.datasource.getUsers();
    }

    getUserById(id: number): Promise<UserEntity> {
        return this.datasource.getUserById(id);
    }

    updateUser(dto: UpdateUserDTO): Promise<UserEntity> {
        return this.datasource.updateUser(dto);
    }

    deleteUser(id: number): Promise<UserEntity> {
        return this.datasource.deleteUser(id);
    }

}