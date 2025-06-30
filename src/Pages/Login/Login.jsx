import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {logIn,signIn} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [disabled,setDisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log({email,password});

        signIn(email,password)
        .then(result=> {
            const user = result.user
            console.log(user);
        })
    }

    const handleValidateCaptcha = () =>{
        const userCaptchaValue = captchaRef.current.value;
        console.log(userCaptchaValue);
        if(validateCaptcha(userCaptchaValue)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name='email'
                            placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" 
                            name='password'
                            placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                  <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" 
                            name='captcha'
                            placeholder="type the captcha code " className="input input-bordered" />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-full  mt-2">validate</button>
                            
                        </div>
                        <div className="form-control mt-6">
                            
                            <input disabled={disabled} className="btn btn-primary w-full" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;