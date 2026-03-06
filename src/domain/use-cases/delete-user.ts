import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface DeleteUserUseCase {
    execute( id: string ): Promise<UserEntity>;
}

export class DeleteUser implements DeleteUserUseCase {
    constructor(
        private readonly repository: Repository
    ) {}
    
    execute(id: string): Promise<UserEntity> {
        return this.repository.deleteUser(id);
    }
    
}