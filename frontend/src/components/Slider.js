import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-1">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

function AutoPlay() {
    const cards = [
        {
            title: 'Card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Card 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Card 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Card 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Card 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
    };

    return (
        <div className="slider-container mb-4">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <Card {...card} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AutoPlay;
