import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const { singIn } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const handleZGoogleLogin = () => {
        singIn()
            .then((data) => {

                const loggedUser = data.user;
                console.log(loggedUser)
                const saveData = { name: loggedUser.displayName, email: loggedUser.email }
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveData)
                })
                    .then(res => res.json())
                    .then((result) => {
                        console.log(result)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Login Success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })


                navigate(from, { replace: true })

            }).catch(error => {

            })
    }

    return (
        <div>
            <button className="btn btn-circle" onClick={handleZGoogleLogin} >
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;