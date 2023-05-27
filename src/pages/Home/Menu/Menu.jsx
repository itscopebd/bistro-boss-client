import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import coverImage from "../../../assets/menu/banner3.jpg"
import UseMenu from '../../../hooks/UseMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"



const Menu = () => {
 

    const [menu] = UseMenu();


    const offereds = menu.filter(offer => offer.category === "offered")
    const desserts = menu.filter(dessert => dessert.category === "dessert")
    const pizzas = menu.filter(pizza => pizza.category === "pizza")
    const salads = menu.filter(salad => salad.category === "salad")
    const soups = menu.filter(soup => soup.category === "soup")




    return (
        <div>
            <Helmet>
                <title>Bisto Boss || Our Menu</title>
            </Helmet>

            <Cover img={coverImage} title="OUR MENU" subTitle="world you like to try a dish!" />

            <SectionTitle heading="TODAY'S OFFER" subheading="---Don't miss---"></SectionTitle>

            <MenuCategory items={offereds} title="" subTilte=""></MenuCategory>


            {/* salads */}

            <MenuCategory items={salads} title="salads" subTilte="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={saladImage}></MenuCategory>

            {/* pizza  */}
            <MenuCategory items={pizzas} title="pizza" subTilte="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={pizzaImage} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>

            {/* soup  */}

            <MenuCategory items={soups} title="soups" subTilte="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={soupImage}></MenuCategory>

            {/* desserts */}

            <MenuCategory items={desserts} title="desserts" subTilte="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={dessertImage} btnText="desserts"></MenuCategory>








        </div>
    );
};

export default Menu;