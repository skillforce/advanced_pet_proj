export enum UserRoles {
    ADMIN='ADMIN',
    USER='USER',
    MANAGER='MANAGER',
}
export interface UserScheme {
    username: string;
    avatar?:string
    id: string;
    roles?:UserRoles[]

}

export interface UserStateScheme {
 authData?: UserScheme;
 _inited?:boolean
}
