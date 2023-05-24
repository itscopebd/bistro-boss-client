import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../../public/home/slide1.jpg"
import slider2 from "../../../../public/home/slide2.jpg"
import slider3 from "../../../../public/home/slide3.jpg"
import slider4 from "../../../../public/home/slide4.jpg"
import slider5 from "../../../../public/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
    return (
    <div>
        <SectionTitle heading="ORDER ONLINE" subheading="---From 11:00am to 10:00pm---"></SectionTitle>
            <>
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img src={slider1} alt="" />
                    <h3 className="text-3xl text-center -mt-20 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>

                    <img src={slider2} alt="" />
                    <h3 className="text-3xl text-center -mt-20 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>

                    <img src={slider3} alt="" />
                    <h3 className="text-3xl text-center -mt-20 text-white">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>

                    <img src={slider4} alt="" />
                    <h3 className="text-3xl text-center -mt-20 text-white">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>

                    <img src={slider5} alt="" />
                    <h3 className="text-3xl text-center -mt-20 text-white">Salads</h3>
                </SwiperSlide>


            </Swiper>
        </>
    </div>
    );
};

export default Category;