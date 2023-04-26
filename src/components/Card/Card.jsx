import React from 'react';

const Card = ({ card }) => {
    const { id, title, url, thumbnailUrl } = card;
    console.log(card);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nulla, laboriosam mollitia nobis odit reprehenderit quam. Officia perferendis quae possimus!</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;