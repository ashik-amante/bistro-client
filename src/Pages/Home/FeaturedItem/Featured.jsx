import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured text-white pt-5 my-10 bg-fixed'>

            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className='md:flex items-center justify-center py-20 px-36 bg-slate-500 bg-opacity-30'>
                <div>
                    <img className='rounded' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='text-2xl'>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div>
                    <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold">Order Now</button>
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Featured;