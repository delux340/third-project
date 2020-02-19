export interface CardTypes {
    description: string
    destination: string
    from: string
    until: string
    price: string
    followers?: number
    image: string
    id?: number
    is_following?: number
    followers_count?: number
}
export interface props {
    actions: { follow: Function }
    vacation: CardTypes

}

export interface state {

}


