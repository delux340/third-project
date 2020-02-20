import { CardTypes } from "../component/UserCard/interface"

export interface initialState {
    register: { registerRedirect: boolean, message: string },
    login: { message: string, role: string, first_name: string },
    vacations: Array<CardTypes>,
    followers: Array<CardTypes>
}
export interface actionType {
    type: string, payload: any
}
