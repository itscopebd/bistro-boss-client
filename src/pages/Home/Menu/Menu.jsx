import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import coverImage from "../../../assets/menu/banner3.jpg"
import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
                <Helmet>
                <title>Bisto Boss || Our Menu</title>   
            </Helmet>
           
            <Cover img={coverImage} title="OUR MENU" subTitle="world you like to try a dish!" />
           <PopularMenu></PopularMenu>
           <PopularMenu></PopularMenu>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;