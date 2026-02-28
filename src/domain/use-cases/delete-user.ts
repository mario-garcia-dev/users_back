import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface DeleteUserUseCase {
    execute( id: number ): Promise<UserEntity>;
}

export class DeleteUser implements DeleteUserUseCase {
    constructor(
        private readonly repository: Repository
    ) {}
    
    execute(id: number): Promise<UserEntity> {
        return this.repository.deleteUser(id);
    }
    
}