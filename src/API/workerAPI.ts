import {instance} from "./instance";
import {NewWorkerType} from "../reducers/reducerWorker";

export const workerAPI = {
    workers() {
        return instance.get(`/workers`)
    },
    addWorker(worker: NewWorkerType) {
        return instance.post(`/workers`, worker)
    },
    deleteWorker(worker_id: string) {
        return instance.delete(`/workers/${worker_id}`)
    },
    updateWorker(worker_id: string, worker: NewWorkerType) {
        return instance.put(`/workers/${worker_id}`, {...worker, createdAt: "321123",
            updatedAt: '123'})
    }
}
