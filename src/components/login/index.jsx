import React from "react"
import {containerStyle, loginStyle, titleStyle, inputStyle, submitButtonStyle } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
 const schema=yup.object().shape({
    email: yup.string().email('invalid email address').required('email is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters long').required('password is required')
 }
 );

export default function App1() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const submitForm=(data)=>{
        console.log(data);
        login();
        navigate('/main');
     };
    return(
        <div style={containerStyle}>
        <div className="loginform" style={loginStyle}>
            <div className="title" style={titleStyle}>Log in</div>
            <div className="inputs">
             <form onSubmit={handleSubmit(submitForm)} style={{ textAlign: 'center', width: '100%' }}>
                <input type="text" name="email" placeholder="email..." style={inputStyle} {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type="text" name="password" placeholder="password..." style={inputStyle} {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input type="submit" style={submitButtonStyle}/>
             </form>
            </div>
        </div>
        </div>
        
    )
};