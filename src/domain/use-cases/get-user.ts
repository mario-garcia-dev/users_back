import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface GetUserByIdUseCase {
    execute( id: string ): Promise<UserEntity>;
}

export class GetUserById implements GetUserByIdUseCase {
    constructor(
        private readonly repository: Repository
    ) {}

    execute( id: string ): Promise<UserEntity> {
        return this.repository.getUserById(id);
    }
    
}