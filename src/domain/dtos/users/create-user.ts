export class CreateUserDTO {
    private constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly name: string,
        public readonly password: string
    ){}

    static create(props: {[key: string]: any}): [string | undefined, CreateUserDTO | undefined] {
        const { id, username, email, name, password } = props;

        if ( !id || !username || !email || !name || !password ) return ["All properties are required", undefined];
        
        return [undefined, new CreateUserDTO(id, username, email, name, password)];
    }
}