import React from 'react';
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const CardRow = () => {
  // Example data for cards
  const cards = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
    },
    {
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
    },
    {
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
    },
    {
      title: 'Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
    },
    {
      title: 'Card 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
    },
  ];

  return (
    <div className="flex justify-center">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardRow;
