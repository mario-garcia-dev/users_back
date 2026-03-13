import { CreateUserDTO, Datasource, UpdateUserDTO, UserEntity } from "../../domain";
import { prisma } from "../../database/postgres/db";

export class PostgresImplementation implements Datasource {
    
    async createUser(dto: CreateUserDTO): Promise<UserEntity> {
        const createdUser = await prisma.users.create({
            data: {
                ...dto,
                isActive: dto.isActive ?? true
            }
        });
        return UserEntity.fromObj(createdUser);
    }

    async getUsers(): Promise<UserEntity[]> {
        const users = await prisma.users.findMany();
        return users.map(u => UserEntity.fromObj(u));
    }
    
    async getUserById(id: string): Promise<UserEntity> {
        const user = await prisma.users.findFirst({
            where: { id }
        });

        if (!user) throw `User with id ${id} not found`;

        return UserEntity.fromObj(user);
    }

    async updateUser(dto: UpdateUserDTO): Promise<UserEntity> {
        const id = dto.id;

        await this.getUserById(id);

        const updatedUser = await prisma.users.update({
            where: { id },
            data: dto!.values,
        });

        return UserEntity.fromObj(updatedUser);
    }

    async deleteUser(id: string): Promise<UserEntity> {
        await this.getUserById(id);

        const deleted = await prisma.users.delete({
            where: { id }
        });

        return UserEntity.fromObj(deleted);
    }

    async login(username: string, password: string): Promise<UserEntity> {
        const user = await prisma.users.findFirst({
            where: { username }
        });

        if (!user) throw "User doesn't exist";

        if (password !== user.password) throw "Passoword incorrect";
        
        return UserEntity.fromObj(user);    
    }
    
}