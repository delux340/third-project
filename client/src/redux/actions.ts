import Actions from "./actions.config"
import { registerService, loginService, verifyTokenService, getVacationsService, followService, addVacationService, removeVacationService, editVacationService, getVacationsFollowService } from "./services"

export const registerUserSuccess = (user: object) => {
    return {
        type: Actions.REGISTER,
        payload: user
    }
}

export const registerUser = (user: object) => {
    return async (dispatch: Function) => {
        const data = await registerService(user)
        dispatch(registerUserSuccess(data))
    }
}

export const loginUserSuccess = (user: object) => {
    return {
        type: Actions.LOGIN,
        payload: user
    }
}

export const loginUser = (user: object) => {
    return async (dispatch: Function) => {
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

export const verifyTokenSuccess = (data: object) => {
    return {
        type: Actions.VALIDATED_STATUS,
        payload: data
    }
}

export const verifyToken = () => {
    return async (dispatch: Function) => {
        const data = await verifyTokenService()
        dispatch(verifyTokenSuccess(data))
    }
}


export const vacationsSuccess = (vacations: Array<object>) => {
    return {
        type: Actions.VACATIONS,
        payload: vacations
    }
}


export const getAllVacations = () => {
    return async (dispatch: Function) => {
        const data = await getVacationsService()
        dispatch(vacationsSuccess(data))
    }

}
export const followVacation = (vacation_id: number, isFollowed: boolean, ) => {
    return async (dispatch: Function) => {
        const data = await followService(vacation_id, isFollowed)
        dispatch(vacationsSuccess(data))
    }

}
export const addVacation = (vacationObj: object) => {
    return async () => {
        await addVacationService(vacationObj)
    }

}
export const removeVacation = (vacationId: number) => {

    return async (dispatch: Function) => {
        const data = await removeVacationService(vacationId)
        dispatch(vacationsSuccess(data))
    }

}
export const editVacation = (vacationObj: object) => {
    return async (dispatch: Function) => {
        const data = await editVacationService(vacationObj)
        dispatch(vacationsSuccess(data))

    }
}


export const getVacationsFollows = () => {
    return async (dispatch: Function) => {
        const data = await getVacationsFollowService()
        dispatch(getFollowersSuccsess(data))

    }
}
export const getFollowersSuccsess = (follows: number) => {
    return {
        type: Actions.FOLLOWERS,
        payload: follows
    }
}
