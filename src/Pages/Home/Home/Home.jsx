import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItem from '../../PopularItem/PopularItem';
import Featured from '../FeaturedItem/Featured';
import Testimonial from '../Testimonal/Testimonial';
import Bistro from '../Bistro boss/Bistro';
import CallUs from '../../../Components/CallUs';
import Chefreco from '../ChefRecommend/Chefreco';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            {/* from our menu */}
            <PopularItem></PopularItem>
            <CallUs></CallUs>
            {/* chef recommendation */}
            <Chefreco></Chefreco>
            {/* from our menu */}
            <Featured></Featured>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;