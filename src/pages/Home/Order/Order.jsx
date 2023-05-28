import orderImage from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Shared/Cover/Cover';
import { useState } from "react";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {



    const categories=['salads','pizza','soups','desserts','drinks']
    const {category} = useParams();

    const initialIndex=categories.indexOf(category)
   

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = UseMenu();
    const drinks = menu.filter(offer => offer.category === "drinks")
    const desserts = menu.filter(dessert => dessert.category === "dessert")
    const pizzas = menu.filter(pizza => pizza.category === "pizza")
    const salads = menu.filter(salad => salad.category === "salad")
    const soups = menu.filter(soup => soup.category === "soup")

    return (
        <div>
            <Cover img={orderImage} title="OUR SHOP" subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="my-10">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts </Tab>
                    <Tab>drinks</Tab>

                </TabList>

                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;