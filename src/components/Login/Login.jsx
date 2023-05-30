import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {


const {user,logIn}= useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation();

const froms = location.state?.from?.pathname || "/";
console.log(froms)
 const [disable, setDisable] = useState(true)
    const captcha = useRef(null)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        logIn(email,password)
        .then(result=>{
            Swal.fire({
                success: 'Success',
                title: 'LogIn',
                text: 'Successfully!'
              }) 
              
        })
        navigate(froms,{replace:true})
    }

    const handleValidateCaptcha = (e) => {

        //    const captchaValue=captcha.target.value;
        const value = e.target.value;
        if (validateCaptcha(value)) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit}>

                <div className="hero-content flex">
                    <div className="text-center lg:text-left h-96">
                      <img src={logIn} alt="" className='w-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" ref={captcha} placeholder="Type the above captha code" name='captcha' className="input input-bordered" />
                                
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" disabled={disable}>Login</button>
                            </div>
                            <button className='text-red-500'>You don't have an account? Please <Link to="/singup" className='text-green-600'>SingUp</Link> </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;