import React from 'react';
import ImageCarousel from './ImageCarousel';
import { NewEvent } from './NewEvent';

const Home = () => {
    return (
        <div className="container-fluid">
            <header className="mb-4 text-center py-2 bg-primary">
                <div>
                    <h4>PHONG QUAN HE DOANH NGHIEP</h4>
                    <h4>DAI HOC FPT CAN THO</h4>

                </div>
            </header>

            <main className='container'>
                <ImageCarousel />
                <NewEvent />
            </main>
        </div >
    );
};

export default Home;
