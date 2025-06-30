import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const Chefreco = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(item => item.category === "salad")
                setItems(salad)
            })
    }, [])
    console.log(items);
    return (
        <div>
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    items.map(item => <div
                        key={item._id}
                        item={item}
                        className="card card-compact bg-base-100  shadow-xl">
                        <figure>
                            <img 
                                className='-96'
                                src={item.image}
                                alt="kam kore na kn" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl text-center font-semibold">{item.name}</h2>
                            <p className='text-center'>{item.recipe}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold text-yellow-500 uppercase">Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chefreco;