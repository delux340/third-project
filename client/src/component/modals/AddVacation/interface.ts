export interface state {
    open: boolean
}
export interface props {
    actions: { addVacation: Function }
    vacation: object
    cleanState: Function
}