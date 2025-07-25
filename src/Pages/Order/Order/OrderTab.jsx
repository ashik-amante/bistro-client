import React from 'react';
import FoodCard from '../../../Components/FoodCard';

const OrderTab = ({item}) => {
    return (
         <div className='grid md:grid-cols-3 gap-10'>
                        {
                            item.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
    );
};

export default OrderTab;