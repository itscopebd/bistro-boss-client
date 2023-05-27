import React from 'react';

const MenuItem = ({ items }) => {
    const { name, image, recipe, price } = items;


    return (
        <div className='flex justify-between gap-5'>
            <img style={{ width: "100px", borderRadius: "0 100px 100px 100px" }} src={image} alt="" />
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <h3 className='uppercase font-bold'>{name}----------------</h3>

                    <p className='text-yellow-500'> ${price}</p>

                </div>
                <h4>{recipe}</h4>
            </div>
        
        </div>
    );
};

export default MenuItem;