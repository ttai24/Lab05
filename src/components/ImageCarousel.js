import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageCarousel = () => {
    return (
        <BootstrapCarousel>
            <BootstrapCarousel.Item>
                <img className="d-block w-100" src="../assets/images/Banner_1.jpg" alt="First slide" />
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img className="d-block w-100" src="../assets/images/Banner_2.png" alt="First slide" />
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img className="d-block w-100" src="../assets/images/Banner_3.png" alt="First slide" />
            </BootstrapCarousel.Item>
        </BootstrapCarousel>
    );
};

export default ImageCarousel;
