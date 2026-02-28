import { CreateUserDTO } from "../dtos/users/create-user";
import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface CreateUserUseCase {
    execute( dto: CreateUserDTO ): Promise<UserEntity>
}

export class CreateUser implements CreateUserUseCase {
    constructor(
        private readonly repository: Repository,
    ) {}

    execute( dto: CreateUserDTO ): Promise<UserEntity> {
        return this.repository.createUser(dto);
    }
    
}