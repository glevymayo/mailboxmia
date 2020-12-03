import React, {useEffect, useState} from "react";
import {loginUserWithEmailAndPassword} from "../../../redux/actions/authActions";
import {useDispatch} from 'react-redux';

export const LoginAdmin = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const handleLogin = () => {
        loginUserWithEmailAndPassword(email, password, dispatch) 
    }


    return <div className="form-container">
        <form>
            <div className="email-container">
                <label>Name</label>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="password-container">
               <label>Password</label>
               <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="button-container">
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        </form>
    </div>
}

