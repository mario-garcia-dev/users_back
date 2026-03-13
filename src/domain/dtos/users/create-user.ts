export class CreateUserDTO {
    private constructor(
        public readonly id: string,
        public readonly username: string,
        public readonly email: string,
        public readonly name: string,
        public readonly password: string,
        public readonly isActive: boolean | undefined,
        public readonly roles: string[],
    ){}

    static create(props: {[key: string]: any}): [string | undefined, CreateUserDTO | undefined] {
        const { id, username, email, name, password, isActive, roles } = props;

        if ( !id || !username || !email || !name || !password || isActive === undefined || roles.length === 0 ) return ["All properties are required", undefined];
        
        return [undefined, new CreateUserDTO(id, username, email, name, password, isActive, roles)];
    }
}