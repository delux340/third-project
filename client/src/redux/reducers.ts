import Actions from "./actions.config"

const initialState = {
    register: { registerRedirect: false, message: "" },
    login: { jwtWithoutPassword: "", message: "" },
    vacations: [],
    validatedStatus: false
}


export default function root(state = initialState, action: any) {
    switch (action.type) {

        case Actions.REGISTER: {

            return {
                ...state,
                register: action.payload
            }
        }
        case Actions.VALIDATED_STATUS: {
            return {
                ...state,
                validatedStatus: action.payload
            }
        }

        case Actions.VACATIONS: {

            return {
                ...state,
                vacations: action.payload
            }
        }

        case Actions.RESET_REDIRECT: {
            return {
                ...state,
                register: { registerRedirect: false, message: "" }
            }
        }
        case Actions.GET_TOKEN: {
            return {
                ...state,
                login: { jwtWithoutPassword: action.payload }
            }
        }

        case Actions.LOGOUT: {

            return {
                ...state,
                login: { jwtWithoutPassword: "", email: "", message: "", loggedIn: false }
            }
        }

        case Actions.LOGIN: {

            return {
                ...state,
                login: action.payload
            }
        }

        default: {
            return state
        }
    }
}