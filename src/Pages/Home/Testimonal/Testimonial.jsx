import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://server-murex-iota-75.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={"TESTIMONIALS"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        review={review}
                    >
                        <div className='px-20 py-10 flex flex-col items-center space-y-3'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className='text-5xl'>
                                <FaQuoteLeft />
                            </div>
                            <p>{review.details}</p>
                            <h2 className='text-2xl text-orange-500 font-semibold'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;