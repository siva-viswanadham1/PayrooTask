import React,{useEffect} from 'react'
import {useNavigate}  from 'react-router-dom';
import { getUser } from '../apicalls/users';
import { useDispatch,useSelector } from 'react-redux';
import { ShowLoading,HideLoading } from '../redux/loadingSlice';
import { SetUser } from '../redux/userSlice';
//import { axiosInstance } from '../apicalls';
import { message } from "antd";
import Cookies from 'js-cookie';


const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const dispacher=useDispatch()
    const user=useSelector(state=>state.users).user
    console.log(user);
    const getCurrentUser=async()=>{
        try {
            //show loader
            dispacher(ShowLoading());
            // call the API
            const response=await getUser();
            // hide loaders
            dispacher(HideLoading())
            if(response.success){
                //set user data in user slice
                dispacher(SetUser(response.data))
            }else{
                // set value null in user slice
                dispacher(SetUser(null))
                // send message
                message.error(response.message)
                
                //delete the token
                Cookies.remove('token');
                //navigate to login page
                navigate("/login")
            }
        } catch (error) {
            // set value null in user slice
            dispacher(SetUser(null))
            // send message
            message.error(error.message)
            //delete the token
            Cookies.remove('token');
            //navigate to login page
            navigate("/login")
        }
    }
    useEffect(()=>{
        
        
        if(Cookies.get('token')){
            
            getCurrentUser();
        }else{
            navigate("/login")
        }
    },[])
    return (
        user && 
        (
          <div className="layout p-1">
            <div className="header bg-my flex justify-between p-2">
              <div>
                <h1 className="text-2xl text-white cursor-pointer"
                  onClick={() => navigate("/")}
                >Hotel Booking App</h1>
              </div>
              <div className="bg-white p-1 flex gap-1">
                <i className="ri-shield-user-line text-primary mt-1"></i>
                <h1
                  className="text-sm underline"
                >
                  {user.name}
                </h1>
    
                <i
                  className="ri-logout-box-r-line mt-1 cursor-pointer"
                  onClick={() => {
                    Cookies.remove('token');
                    navigate("/login");
                  }}
                ></i>
              </div>
            </div>
            <div className="content mt-1 p-1">{children}</div>
          </div>
        )
      );
}
export default ProtectedRoute