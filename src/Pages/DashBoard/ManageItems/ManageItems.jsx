import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

const ManageItems = () => {
    const [menu] = useMenu()

    const axiosSecure = useAxiosSecure()

    // const { data: menu = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users')
    //         return res.data
    //     }
    // })

    const handleDeleteItem = item => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                // if(res.data.deletedCount>0){
                //     Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                // }
                
            }
        });
    }
    return (
        <div>
            <SectionTitle heading='Manage All Items' subHeading='Hurry Up'></SectionTitle>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price} $</td>
                                <th>
                                    <button className="btn btn-ghost btn-lg text-orange-600"> <FaEdit></FaEdit>  </button>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg text-red-600"> <FaTrash></FaTrash> </button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;