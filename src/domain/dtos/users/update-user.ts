export class UpdateUserDTO {
    private constructor(
        public readonly id: number,
        public readonly username: string,
        public readonly email: string,
        public readonly name: string,
        public readonly password: string
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if (this.username) returnObj.username = this.username;
        if (this.email) returnObj.email = this.email;
        if (this.name) returnObj.name = this.name;
        if (this.password) returnObj.password = this.password;

        return returnObj;
    }

    static update(props: {[key: string]: any}): [string | undefined, UpdateUserDTO | undefined] {
        const { id, username, email, name, password } = props;

        if ( !id || !username || !email || !name || !password ) return ["All properties are required", undefined];
        
        return [undefined, new UpdateUserDTO(id, username, email, name, password)];
    }
}