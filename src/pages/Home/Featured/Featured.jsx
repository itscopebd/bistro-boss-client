import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from "../../../../public/home/featured.jpg";
import "./featured.css"
const Featured = () => {
    return (
        <div className='my-10 py-20 custom__featured bg-fixed bg-slate-500 bg-opacity-50'>
            <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---"></SectionTitle>
            <div className='flex justify-between items-center px-32 pb-20 pt-16 gap-10 bg-slate-500 bg-opacity-25' >
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='text-white'>
                    <h2>March 20, 2023</h2>
                    <h2>WHERE CAN I GET SOME?WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;