export interface state {
    open: boolean,
    vacation: {
        description: string,
        destination: string,
        image: string,
        from: string,
        until: string,
        price: string
    }
}

export interface props {
    actions: { editVacation: Function },
    vacation: {
        description: string,
        destination: string,
        image: string,
        from: string,
        until: string,
        price: string
    }
}
