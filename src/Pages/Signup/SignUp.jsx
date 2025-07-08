import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, } from "react-hook-form"
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                        
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user added to database ",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                        console.log('name and phot updated ');
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err);
                    })
                console.log(user);

            })
            .catch(err => {
                console.log(err.message);
            })
        reset()
    }

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', {
                                    required: true, minLength: 4,
                                    maxLength: 30
                                })} name='name' placeholder="email" className="input input-bordered" />

                                {errors.name?.type === 'required' && <span className='text-red-500 mr-4'>name is required  </span>}

                                {errors.name?.type === 'minLength' && <span className='text-red-500 mr-4'>name must be 4 char or long   </span>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register('photoURL', {
                                    required: true,
                                })} name='photoURL' placeholder="Photo url" className="input input-bordered" />

                                {errors.photoURL?.type === 'required' && <span className='text-red-500 mr-4'>Photo url is required  </span>}




                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500 mr-4'> Email is required </span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
                                })} name='password' placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'minLength' && <span className='text-red-500 mr-4'>Password must be 6 charecter</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500 mr-4'>Must include: 1 capital letter, 1 number, 1 special character</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary w-full" type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;