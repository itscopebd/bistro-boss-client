import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const  {createUser,userProfileUpdate}  = useContext(AuthContext)
   const navigate= useNavigate()
    const onSubmit = data => {
        console.log(data.photourl)
        createUser(data.email, data.password)
        .then(result=>{
            userProfileUpdate(data.name, data.photourl)
            .then(()=>{
                const saveData={name:data.name, email:data.email}
                fetch("http://localhost:5000/users/",{
                    method:"POST",
                    headers:{
                        "content-type":"aplication/json"
                    },
                    body: JSON.stringify(saveData)
                    
                })
                .then(result=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registration Success',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate("/login")
                }).catch(error=>{
                    
                })
            })
        })
    };
    return (
        <>
            <Helmet>
                <title> SingUP</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex">
                    <div className="text-center lg:text-left h-96">
                        <img src="" alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">


                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='email' placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name?.type === "required" && <p className='text-red-500 mt-2'>Name field is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name='photourl' placeholder="Photo Url" className="input input-bordered" {...register("photourl", { required: true })} />
                                {errors.name?.type === "required" && <p className='text-red-500 mt-2'>Photo Url field is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.name?.type === "required" && <p className='text-red-500 mt-2'>Email field is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password", {
                                    required: true,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/

                                })} />
                                {errors.password?.type === "required" && <p className='text-red-500 mt-2'>Password field is required</p>}
                                {errors.password?.type === "pattern" && <p className='text-red-500 mt-2'>Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:</p>}

                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary" value="SingUp" />
                            </div>
                            <button className='text-red-500'>You have an account? Please <Link to="/login" className='text-green-600'>LogIn</Link> </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;