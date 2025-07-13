import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDelete = user => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }


    return (
        <div>
            <div className='flex justify-evenly py-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} user={user}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                   { user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn  btn-lg text-white text-2xl bg-orange-500"> <FaUsers></FaUsers> </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg text-red-600"> <FaTrash></FaTrash> </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;