import React from 'react';

const Service = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Geo Assist!</h1>
      <p className="text-gray-700">
        At Geo Assist, we're your compass in the world of location services. Whether you're exploring a new city, searching for your dream home, or optimizing business decisions, we've got you covered.
      </p>
      <h2 className="text-lg font-semibold mt-6">Our Services:</h2>
      <ul className="list-disc pl-6 mt-4">
        <li>
          <span className="font-semibold">All-in-One Amenities Search:</span> Discover nearby amenities—restaurants, schools, parks, and more—all in one place. No more juggling multiple apps or websites.
        </li>
        <li>
          <span className="font-semibold">Clustered Map View:</span> Visualize amenities and services on an interactive map. Clusters make it easy to explore areas with high concentrations of your preferred amenities.
        </li>
        <li>
          <span className="font-semibold">User-Friendly Interface:</span> Our intuitive interface ensures a seamless experience. Just type in your preferences, and let Geo Assist guide you.
        </li>
        <li>
          <span className="font-semibold">Personalized Searches:</span> Tailor your search based on your lifestyle—whether you're a foodie, a fitness enthusiast, or a parent looking for schools.
        </li>
      </ul>
      <p className="mt-4 text-gray-700">
        Ready to find your perfect spot? Let Geo Assist simplify your journey!
      </p>
    </div>
  );
};

export default Service;
