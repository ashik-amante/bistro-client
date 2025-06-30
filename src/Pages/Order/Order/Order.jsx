import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Home/Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza',  'dessert', 'soup','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(category);

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    // const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover img={orderImg} title="Order food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza </Tab>
                    <Tab>dessert</Tab>
                    <Tab>soup</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={desserts}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;