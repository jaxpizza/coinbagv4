import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTokenData = () => {
  const [tokenInfo, setTokenInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');
        const response = await axios.get('/api/hello');
        console.log('API response status:', response.status);
        console.log('API response headers:', response.headers);
        console.log('API response data:', response.data);
        setTokenInfo(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching token data:', err);
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Fetch new data every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return { tokenInfo, loading, error };
};
