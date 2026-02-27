import { Datasource, UserEntity } from "../../domain";
import { prisma } from "../../database/postgres/db";

export class PostgresImplementation implements Datasource {
    
    async createUser(user: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.")
    }
    async getUsers(): Promise<UserEntity[]> {
        const users = await prisma.users.findMany();
        return users.map(u => UserEntity.fromObj(u));
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