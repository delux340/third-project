export interface CardTypes {
    description: string
    destination: string
    from: string
    until: string
    price: string
    followers: number
    image: string
}
export interface props {
    vacations: Array<any>,
    actions: { follow: Function }
    vacation: CardTypes
}

export interface state {

}

