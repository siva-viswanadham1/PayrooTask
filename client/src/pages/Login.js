import React from 'react'
import { Button,  Form, message, } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import { axiosInstance } from '../apicalls';
import { LoginUser } from '../apicalls/users';
import {useEffect} from 'react';
import Cookies from 'js-cookie';



const Login = () => {
  const navigate=useNavigate();
  useEffect(() => {
    if(Cookies.get('token')) {
      navigate("/")
    }
  }, [])
    const onFinish=async (values)=>{
        try {
          const response=await LoginUser(values)
          if(response.success){
            message.success(response.message)
            Cookies.set('token', response.data, { expires: 1 });
            navigate("/")
          }else{
            message.error(response.message)
          }
        } catch (error) {
          message.error(error)
        }
    }
  return (
    <div className="flex justify-center h-screen items-center bg-my">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome to Hotel Booking App! Please do login
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{required:true,message:'Please input your email'}]}
          >
            <input type="text" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" placeholder="Enter your password"/>
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth htmlType="submit" type="primary">
              {" "}
              Login{" "}
            </Button>
            <Link to="/register" className="text-primary">
              {" "}
              don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login