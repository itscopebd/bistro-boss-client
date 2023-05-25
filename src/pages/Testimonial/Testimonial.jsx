import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// ratting 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {
                reviews.map(review => <SwiperSlide>
                    <div className='text-center mx-32 py-5 space-y-3'>
                      
 
                        <Rating className='mx-auto'
                            style={{ maxWidth: 120 }}
                            value={review.rating}
                            readOnly
                        />
                     

                        <h4 className='my-2'>{review.details}</h4>
                        <p className='text-xl text-yellow-400'>{review.name}</p>
                    </div>
                </SwiperSlide>
                )
            }

        </Swiper>
    );
};

export default Testimonial;