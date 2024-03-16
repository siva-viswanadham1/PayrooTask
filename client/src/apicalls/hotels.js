const {axiosInstance}=require('.')

//get hotels
export const getHotels=async (payload)=>{
    try {
        
        const response=await axiosInstance.get('api/hotel/getAllHotels')       
        return response.data
    } catch (error) {
        return error;
    }
}
//Register Booking
export const registerBooking=async (payload)=>{
    try {
        
        const response=await axiosInstance.post('api/hotel/bookHotel',{ data: payload })       
        return response.data
    } catch (error) {
        return error;
    }
}

// to get Booking by the user
export const bookingByUser=async (payload)=>{
    try {
        
        const response=await axiosInstance.post('api/hotel/getBookingsByUser',payload)       
        return response.data
    } catch (error) {
        return error;
    }
}

// to get Bookings by date
export const bookingByDate=async (payload)=>{
    try {
        
        const response=await axiosInstance.post('api/hotel/getBookingsByDate',payload)       
        return response.data
    } catch (error) {
        return error;
    }
}

// to delete Booking
export const deleteBooking=async (payload)=>{
    try {
        
        const response=await axiosInstance.delete('api/hotel/delete',{ data: payload })       
        return response.data
    } catch (error) {
        return error;
    }
}