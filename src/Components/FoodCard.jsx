import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const { image, name, price, recipe, _id } = item

    const handleAddTocart = food => {
        console.log(food);
        if (user && user?.email) {
            // todo
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, price, image
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} is added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })

        }
        else {

            Swal.fire({
                title: "You are not login, ",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "LogIn!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 py-2 font-semibold rounded-lg'>$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div
                    onClick={() => handleAddTocart(item)}
                    className="card-actions justify-center">
                    <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold text-yellow-500 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;