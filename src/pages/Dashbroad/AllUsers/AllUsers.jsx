import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })

    return (
        <div>
            <h3 className="text-2xl font-semibold my-3">All Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            users.map((user, index) => <tr>

                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ? "Admin" : <>
                                            <button className=' text-white btn btn-ghost btn-sm bg-orange-600'><FaUserShield></FaUserShield></button>
                                        </>
                                    }

                                </td>
                                <td> <button className=' text-white btn btn-ghost btn-sm bg-orange-600'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>

                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;