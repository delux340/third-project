import Actions from "./actions.config"

const initialState = {
    register: { registerRedirect: false, message: "" },
    login: { jwtWithoutPassword: "", message: "", role: "" },
    vacations: [],
    followers: []
}


export default function root(state = initialState, action: any) {
    switch (action.type) {

        case Actions.REGISTER: {

            return {
                ...state,
                register: action.payload
            }
        }
        case Actions.FOLLOWERS: {

            return {
                ...state,
                followers: action.payload
            }
        }
        case Actions.VALIDATED_STATUS: {
            const { login } = initialState
            return {
                ...state,
                login: { ...login, role: action.payload.role }
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
        case Actions.LOGOUT: {

            return {
                ...state,
                login: { jwtWithoutPassword: "", email: "", message: "", loggedIn: false, role: "" },
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