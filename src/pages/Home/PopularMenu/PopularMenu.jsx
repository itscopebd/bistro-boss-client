import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(popular=>popular.category==='popular')
                setMenu(filterData)
            })
    }, [])

    console.log(menu)
    return (
        <section>
            <SectionTitle heading="From Our Menu" subheading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    menu.map(item => <MenuItem key={item._id} items={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;