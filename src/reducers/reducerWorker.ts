import {Dispatch} from "redux";
import {workerAPI} from "../API/workerAPI";

export type ReducerWorkerType = {
    workers: Array<WorkerType>

}
export type WorkerType = {
    _id: string,
    fullName: string,
    gender: string,
    contacts: string,
    salary: string
    position: string,
    createdAt: string,
    updatedAt: string
}
export type NewWorkerType = {
    fullName: string,
    gender: string,
    contacts: string,
    salary: string
    position: string
}

const InitialState: ReducerWorkerType = {
    workers: []
}

export const reducerWorker = (state = InitialState, action: ActionType) => {

    switch (action.type) {

        case "SET_WORKERS":
            return {
                ...state,
                workers: action.payload.users
            }


        default:
            return state;
    }
}

export const getWorkersTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await workerAPI.workers()
        dispatch(setWorkersAC(res.data.data.workers))

    } catch (e) {
        console.log(e)
    }
}
export const addWorkerTC = (worker: NewWorkerType) => async (dispatch: Dispatch<any>) => {
    try {
        await workerAPI.addWorker(worker)
        dispatch(getWorkersTC())

    } catch (e) {
        console.log(e)
    }
}
export const deleteWorkerTC = (worker_id: string) => async (dispatch: Dispatch<any>) => {
    try {
        await workerAPI.deleteWorker(worker_id)
        dispatch(getWorkersTC())

    } catch (e) {
        console.log(e)
    }
}
export const updateWorkerTC = (worker_id: string, worker: NewWorkerType) => async (dispatch: Dispatch<any>) => {
    try {
        await workerAPI.updateWorker(worker_id, worker)
        dispatch(getWorkersTC())

    } catch (e) {
        console.log(e)
    }
}

export const setWorkersAC = (users: Array<WorkerType>) => ({
    type: "SET_WORKERS", payload: {users}
} as const)



type setWorkerACType = ReturnType<typeof setWorkersAC>


type ActionType = setWorkerACType
