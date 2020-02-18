import Actions from "./actions.config"
import { actionType } from "./interface"
const initialState = {
    register: { registerRedirect: false, message: "" },
    login: { message: "", role: "" },
    vacations: [],
    followers: []
}

export default function root(state = initialState, action: actionType) {
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
            return {
                ...state,
                login: action.payload
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
                login: { message: "", role: "" },
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