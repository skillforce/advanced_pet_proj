export interface UserScheme {
    username: string;
    avatar?:string
    id: string;
}

export interface UserStateScheme {
 authData?: UserScheme;
 _inited?:boolean
}
