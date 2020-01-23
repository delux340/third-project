import Actions from "./actions.config"
import { registerService, loginService, verifyTokenService, getVacationsService, followService } from "./services"

export const registerUserSuccess = (user: any) => {
    return {
        type: Actions.REGISTER,
        payload: user
    }
}

export const registerUser = (user: any) => {
    return async (dispatch: any) => {
        const data = await registerService(user)
        dispatch(registerUserSuccess(data))
    }
}

export const loginUserSuccess = (user: any) => {
    return {
        type: Actions.LOGIN,
        payload: user
    }
}

export const loginUser = (user: any) => {
    console.log(user)
    return async (dispatch: any) => {
        const data = await loginService(user)
        dispatch(loginUserSuccess(data))

    }
}


export const logout = () => {
    localStorage.setItem("token", "")
    return {
        type: Actions.LOGOUT
    }
}
export const resetRedirect = () => {
    return {
        type: Actions.RESET_REDIRECT
    }
}
export const getToken = () => {
    const token = localStorage.getItem("token")
    return {
        type: Actions.GET_TOKEN,
        payload: token
    }
}
export const verifyTokenSuccess = (status: any) => {
    return {
        type: Actions.VALIDATED_STATUS,
        payload: status
    }
}

export const verifyToken = () => {
    return async (dispatch: any) => {
        const data = await verifyTokenService()
        dispatch(verifyTokenSuccess(data))
    }
}


export const vacationsSuccess = (vacations: any) => {
    return {
        type: Actions.VACATIONS,
        payload: vacations
    }
}


export const getAllVacations = () => {
    return async (dispatch: any) => {
        const data = await getVacationsService()
        dispatch(vacationsSuccess(data))
    }

}
export const followVacation = () => {
    return async (dispatch: any) => {
        const data = await followService()
        // dispatch()
    }

}
