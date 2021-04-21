import {instance} from "./instance";

export const authAPI = {
    login(values: any){
        return  instance.post(`/auth/login`, values)
    },
    register(values: any){
        return instance.post(`/auth/register`, values)
    },
    authMe(){
        return instance.post(`/auth/me`)
    },
    logout(){
        return instance.delete(`/auth/logout`)
    }

}
