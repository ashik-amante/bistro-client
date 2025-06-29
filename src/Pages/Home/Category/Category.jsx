import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading ={"ORDER ONLINE"}
            >
                
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-14"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl text-white
             -mt-16 text-center font-semibold '>SALAD</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl text-white
             -mt-16 text-center font-semibold uppercase'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-4xl text-white
             -mt-16 text-center font-semibold uppercase'>soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl text-white
             -mt-16 text-center font-semibold uppercase'>SALAD</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl text-white
             -mt-16 text-center font-semibold uppercase'>pizza</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;