import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const  {createUser}  = useContext(AuthContext)
   
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(data=>{
            console.log(data.user)
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
                                <input type="text" name='email' placeholder="Name" className="input input-bordered" {...register("name", { required: true, minLength: 5, maxLength: 10 })} />
                                {errors.name?.type === "required" && <p className='text-red-500 mt-2'>Name field is required</p>}
                                {errors.name?.type === "minLength" && <p className='text-red-500 mt-2'>Minimum 5 charecter</p>}
                                {errors.name?.type === "maxLength" && <p className='text-red-500 mt-2'>Maximum 10 charecter</p>}
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;