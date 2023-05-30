import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { AuthContext } from './../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/useCart';

const Card = ({ items }) => {
    const {_id, name, image, recipe, price } = items;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
const[,refetch]=UseCart();
    const location = useLocation()

    const handleAddToCard = (item) => {
        const oderItems= {orderMenuId: _id, name,image,recipe,price, email:user?.email}
        if (user && user.email) {

            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(oderItems)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch(); // refetch to cart data 
                        Swal.fire({
                             
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the cart!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }



    }
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <p className='absolute top-2 right-5 bg-slate-700 px-5 text-white rounded-lg'> ${price}</p>
                <div className="card-body">

                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCard(items)} className="btn btn-outline border-0 border-b-4">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;