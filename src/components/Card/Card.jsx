import React from 'react';

const Card = ({items}) => {
    const { name, image, recipe, price } = items;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <p className='absolute top-2 right-5 bg-slate-700 px-5 text-white rounded-lg'> ${price}</p>
                <div className="card-body">

                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-4">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;