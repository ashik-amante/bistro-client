import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../Home/Shared/MenuItem/MenuItem';

const PopularItem = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populardata = data.filter(item => item.category === 'popular')
                setMenu(populardata)
            })
    }, [])

    console.log(menu);
    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._key}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center mt-4'>
                <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold">View full menu</button>
            </div>
        </section>
    );
};

export default PopularItem;