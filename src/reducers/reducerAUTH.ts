import {Dispatch} from "redux";
import {authAPI} from "../API/authAPI";


export type AuthInitialStateType = {
    status: boolean
    isAuth: boolean
    user_id: string
    email: string
}

const InitialState: AuthInitialStateType = {
    status: false,
    isAuth: false,
    user_id: "",
    email: ""
}

export const reducerAUTH = (state = InitialState, action: ActionType) => {
    switch (action.type) {

        case "SET_IS_AUTH":
        case "SET_STATUS":
        case "SET_AUTH_DATA":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const loginTC = (values: any) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.login(values)
        if(res.data.resultCode === 0){
            dispatch(setIsAuthAC(true))
        }
    } catch (e) {
        console.log(e)

    }
}

export const registerTC = (values: any) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.register(values)
        if(res.data.resultCode === 0){

        }
    } catch (e) {
        console.log(e)
    }
}


export const authMeTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.authMe()
        if(res.data.resultCode === 0){
            dispatch(setIsAuthAC(true))
            dispatch(setAuthDataAC(res.data.data._id, res.data.data.email))
        }
    } catch (e) {
        console.log(e)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        await authAPI.logout()
        dispatch(setIsAuthAC(false))

    } catch (e) {
        console.log(e)
    }
}

export const setStatusAC = (status: boolean) => ({
    type: "SET_STATUS", payload: {status}
} as const)

export const setAuthDataAC = (user_id: string, email: string) => ({
    type: "SET_AUTH_DATA", payload: {user_id, email}
} as const)

export const setIsAuthAC = (isAuth: boolean) => ({
    type: "SET_IS_AUTH", payload: {isAuth}
} as const)

type setAuthDataTypeAC = ReturnType<typeof setAuthDataAC>
type isSendMailTypeAC = ReturnType<typeof setStatusAC>
type setIsAuthTypeAC = ReturnType<typeof setIsAuthAC>

type ActionType = setAuthDataTypeAC | isSendMailTypeAC | setIsAuthTypeAC
