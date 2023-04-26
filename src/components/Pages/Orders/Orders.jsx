import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Card/Card';

const Orders = () => {
    const [showAll, setShowAll] = useState(false);

    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div className='my-10 mx-20'>
            <h2 className='text-center text-4xl font-semibold'>All Cards Here!!</h2>
            <div className='md:grid gap-14 grid-cols-3 my-6'>
                {
                    showAll ?
                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                        ></Card>)
                        :
                        cards.slice(0, 6).map(card => <Card
                            key={card.id}
                            card={card}
                        ></Card>)
                }
            </div>
            <div className='text-center'>
                {
                    !showAll && <button onClick={() => setShowAll(true)} className='btn-primary'>Show All Cards</button>
                }
            </div>
        </div>
    );
};

export default Orders;