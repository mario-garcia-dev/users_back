import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface LoginUseCase {
    execute( username: string, password: string ): Promise<UserEntity>;
}

export class Login implements LoginUseCase {
    constructor(
        private readonly repository: Repository,
    ) {}

    execute(username: string, password: string): Promise<UserEntity> {
        return this.repository.login(username, password);
    }
    
}