import { CardTypes } from "../component/Card/interface"

export interface initialState {
    register: { registerRedirect: boolean, message: string },
    login: { message: string, role: string },
    vacations: Array<CardTypes>,
    followers: Array<any>
}
