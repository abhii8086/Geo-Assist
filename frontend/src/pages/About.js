import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <h1 className="text-2xl font-bold mb-4">Welcome to Geo Assist!</h1>
      <p className="text-gray-700">
        Whether you're a developer, a business owner, or someone looking for a new home, Geo Assist is here to help. Let's explore what we offer:
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li>
          <span className="font-semibold">Developers:</span> Dive into our geolocation APIs and SDKs. Build location-aware applications, track assets, and enhance user experiences with accurate location data.
        </li>
        <li>
          <span className="font-semibold">Businesses:</span> Leverage our geospatial insights. Optimize supply chains, analyze market trends, and make data-driven decisions based on location intelligence.
        </li>
        <li>
          <span className="font-semibold">Home Seekers:</span> Discover neighborhoods, commute times, and local amenities. Use our maps to find your dream home or explore investment opportunities.
        </li>
      </ul>
      <p className="mt-4 text-gray-700">
        Geo Assist is your compass in the world of geospatial information. Let's navigate together!
      </p>
    </div>
  );
};

export default About;
