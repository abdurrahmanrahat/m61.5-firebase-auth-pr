import React from 'react';
import HImage from '../../../../public/images/header-img.png';

const Home = () => {
    return (
        <div className='md:mx-20'>
            {/* Header Section */}
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={HImage} className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Well See My Design!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;