import React from 'react';
import Card from '../../../../components/Card/Card';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
        {
           items.map(salad=><Card items={salad} key={salad._id}></Card>)
         }
        </div>
    );
};

export default OrderTab;