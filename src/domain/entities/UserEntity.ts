export class UserEntity {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public name: string,
        public password: string,
        public isActive: boolean | undefined,
        public roles: string[]
    ) {}

    public static fromObj( object: {[key: string]: any} ): UserEntity {
        const { id, username, email, name, password, isActive, roles } = object;

        if (!id || !username || !email || !name || !password || isActive === undefined || roles.length === 0) throw new Error("Incompleted parameters");

        return new UserEntity(id, username, email, name, password, isActive, roles);
    }

}