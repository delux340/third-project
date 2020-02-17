import { CardTypes } from "../component/UserCard/interface"

export interface initialState {
    register: { registerRedirect: boolean, message: string },
    login: { message: string, role: string },
    vacations: Array<CardTypes>,
    followers: Array<any>
}
