export interface state {
    email: string,
    password: string
}
export interface props { actions: { login: Function, redirectReset: Function }, history: Array<string> }