export interface state {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface props {
    actions: { register: Function },
    registerRedirect: boolean
    history:Array<string>
}