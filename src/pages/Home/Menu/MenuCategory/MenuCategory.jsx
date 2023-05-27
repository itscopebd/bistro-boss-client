import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';
const MenuCategory = ({ items, title, subTilte ,coverImg}) => {
    return (
        <div>
            <section>
                {
                    title && <Cover img={coverImg} title={title} subTitle={subTilte} />
                }
                <div className='grid md:grid-cols-2 gap-10 my-10'>
                    {
                        items.map(item => <MenuItem key={item._id} items={item}></MenuItem>)
                    }
                </div>
               <div className='text-center my-5'>
               <Link to={`/order/${title}`} className='border-b-2 bg-none border-black'>ORDER YOUR FAVOURITE FOOD</Link>
               </div>
            </section>
        
        </div>
    );
};

export default MenuCategory;