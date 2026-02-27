import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface GetUsersUseCase {
    execute(): Promise<UserEntity[]>
}

export class GetUsers implements GetUsersUseCase {
    constructor(
        private readonly repository: Repository,
    ) {}

    execute(): Promise<UserEntity[]> {
        return this.repository.getUsers();
    }
}