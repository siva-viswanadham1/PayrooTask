const {axiosInstance}=require('.')

//Register Users
export const RegisterUser=async (payload)=>{
    try {
        
        const response=await axiosInstance.post('api/users/register',payload)       
        return response.data
    } catch (error) {
        return error;
    }
}

//Login users

export const LoginUser=async(payload)=>{
    try {
        const response=await axiosInstance.post('api/users/login',payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const getUser=async()=>{
    try {
        const response = await axiosInstance.get('api/users/currentUser')
        return response.data
    } catch (error) {
        return error
    }
}


