import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Map() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/clusters')
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setData(data);
        } else {
          // console.error('Expected an array but received:', data);
          setData([]); // Set an empty array to avoid errors in rendering
        }
      })
      .catch(error => {
        console.error('Error fetching clusters:', error.response ? error.response.data : error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Mumbai Clusters</h1>
        <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <iframe
          src="http://localhost:5000/map  "
          width="100%"
          height="600px"
          title="Mumbai Map"
          className="border"
        ></iframe>
      </div>
    </div>
      {/* <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              {item.Categories} - Cluster {item.cluster}
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul> */}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

export default Map;
