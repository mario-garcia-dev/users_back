export class UpdateUserDTO {
    private constructor(
        public readonly id: string,
        public readonly username: string,
        public readonly email: string,
        public readonly name: string,
        public readonly password: string,
        public readonly isActive: boolean | undefined,
        public readonly roles: string[],
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if (this.username) returnObj.username = this.username;
        if (this.email) returnObj.email = this.email;
        if (this.name) returnObj.name = this.name;
        if (this.password) returnObj.password = this.password;
        if (this.isActive) returnObj.isActive = this.isActive;
        if (this.roles) returnObj.roles = this.roles;

        return returnObj;
    }

    static update(props: {[key: string]: any}): [string | undefined, UpdateUserDTO | undefined] {
        const { id, username, email, name, password, isActive, roles } = props;

        if ( !id || !username || !email || !name || !password || isActive === undefined || roles.length === 0 ) return ["All properties are required", undefined];
        
        return [undefined, new UpdateUserDTO(id, username, email, name, password, isActive, roles)];
    }
}