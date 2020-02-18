import { CardTypes } from "../UserCard/interface"


export interface state { }
export interface props {
    actions: { vacations: Function },
    vacations: Array<CardTypes>,
    role: string,
}
