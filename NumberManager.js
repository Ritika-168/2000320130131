import React, { useState } from 'react';
import axios from 'axios';

const NumberManager = () => {
  const [urls, setUrls] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get('http://localhost:8008/numbers', {
        params: {
          urls: urls.split(",").map(url => url.trim())
        }
      });
      setNumbers(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h1>Number Manager</h1>
      <input
        type="text"
        placeholder="Enter URLs separated by comma"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Number Data:</h2>
        <pre>{JSON.stringify(numbers, null, 2)}</pre>
      </div>
    </div>
  );
};

export default NumberManager;