import React from 'react';
import { Helmet } from 'react-helmet';
import UseCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
const MyCart = () => {
    const [cart, refetch] = UseCart();
    const price = cart.reduce((sum, item) => item.price + sum, 0);
    // const location = useLocation()
    // console.log(location)


    const handleDeleteItem = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/del/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })

    }



    <Helmet>
        <title>My Cart</title>
    </Helmet>

    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h2 className='font-semibold text-2xl'>Total Items: {cart.length}</h2>
                <h2 className='font-semibold text-2xl'>Total Price: ${price}</h2>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-[#D1A054]'>
                        <tr>


                            <th>No..</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((items, index) => <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={items.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{items.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${items.price}
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-sm rounded-sm border-0  bg-[#D1A054]" onClick={() => handleDeleteItem(items._id)} > <FaTrashAlt></FaTrashAlt> </button>
                                </th>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default MyCart;