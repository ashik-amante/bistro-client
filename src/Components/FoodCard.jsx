import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item
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
                <div className="card-actions justify-center">
                    <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold text-yellow-500 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;