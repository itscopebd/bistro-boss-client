import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center my-5 w-3/12 mx-auto'>
            <p className='text-center text-yellow-400 my-2 text-xl'>{subheading}</p>
            <h3 className='text-3xl  border-y-2 py-2 border-gray-300'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;