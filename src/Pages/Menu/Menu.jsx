import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Home/Shared/Cover/Cover';

import coverImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';

import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
     const desserts = menu.filter(item => item.category === 'dessert')
     const soup = menu.filter(item => item.category === 'soup')
     const salad = menu.filter(item => item.category === 'salad')
     const pizza = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')
    
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover 
             img={coverImg}
             title='OUR MENU'
            ></Cover>

            {/* main cover  */}
           <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>

           {/* offered menu */}
           <MenuCategory items={offered}></MenuCategory>

           {/* dessert menu */}
           <MenuCategory items={desserts} title='dessert' coverImg={dessertImg} ></MenuCategory>

           {/* piza menu */}
           <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg} ></MenuCategory>
           {/* salad menu */}
           <MenuCategory items={salad} title='salad' coverImg={saladImg} ></MenuCategory>

           {/* soup menu */}
           <MenuCategory items={soup} title='soup' coverImg={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;