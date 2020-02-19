import { CardTypes } from "../../UserCard/interface"

export interface state {
    open: boolean
}
export interface props {
    actions: { addVacation: Function }
    vacation: CardTypes
    cleanState: Function
}