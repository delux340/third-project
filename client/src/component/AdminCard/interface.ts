export interface CardTypes {
    description: string
    destination: string
    from: string
    until: string
    price: string
    followers: number
    image: string
    id?: number
    followers_count?: number
}
export interface props {
    vacations: Array<CardTypes>,
    actions: { follow: Function }
    vacation: CardTypes
    
}

export interface state {

}

