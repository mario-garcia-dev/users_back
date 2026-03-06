export class UserEntity {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public name: string,
        public password: string
    ) {}

    public static fromObj( object: {[key: string]: any} ): UserEntity {
        const { id, username, email, name, password } = object;

        if (!id || !username || !email || !name || !password) throw new Error("Incompleted parameters");

        return new UserEntity(id, username, email, name, password);
    }

}