import { UpdateUserDTO } from "../dtos/users/update-user";
import { UserEntity } from "../entities/UserEntity";
import { Repository } from "../repositories/repository";

export interface UpdateUserUseCase {
    execute(dto: UpdateUserDTO): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserUseCase{
    constructor(
        private readonly repository: Repository
    ) {}

    execute(dto: UpdateUserDTO): Promise<UserEntity> {
        return this.repository.updateUser(dto);
    }

}