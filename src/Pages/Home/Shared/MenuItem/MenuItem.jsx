import React from 'react';

const MenuItem = ({item}) => {
    const {image,name,price,recipe} = item
    return (
        <div>
            <div className='flex gap-8 '>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-20' src={image} alt="" />
                <div>
                    <h3 className='text3xl uppercase text-[#151515]'>{name}</h3>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-500 text-xl'>$ {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;