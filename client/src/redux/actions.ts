import Actions from "./actions.config"
import { registerService, loginService, verifyTokenService, getVacationsService, followService, addVacationService, removeVacationService, editVacationService,getVacationsFollowService } from "./services"

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

export const verifyTokenSuccess = (data: any) => {
    return {
        type: Actions.VALIDATED_STATUS,
        payload: data
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
export const followVacation = (isFollowed: any, vacation_id: any) => {
    return async (dispatch: Function) => {
        const data = await followService(isFollowed, vacation_id)
        dispatch(vacationsSuccess(data))
    }

}
export const addVacation = (vacationObj: any) => {
    return async () => {
        await addVacationService(vacationObj)
    }

}
export const removeVacation = (vacationId: any) => {

    return async (dispatch: any) => {
        const data = await removeVacationService(vacationId)
        dispatch(vacationsSuccess(data))
    }

}
export const editVacation = (vacationObj: any) => {
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
export const getFollowersSuccsess = (follows: any) => {
    return {
        type: Actions.FOLLOWERS,
        payload: follows
    }
}
