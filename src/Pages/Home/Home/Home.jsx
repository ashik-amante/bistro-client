import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItem from '../../PopularItem/PopularItem';
import Featured from '../FeaturedItem/Featured';
import Testimonial from '../Testimonal/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;