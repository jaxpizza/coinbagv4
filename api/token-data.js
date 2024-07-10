const axios = require('axios');

module.exports = async (req, res) => {
  const API_KEY = process.env.COINMARKETCAP_API_KEY;
  const TOKEN_ID = '31798'; // UCID for JENNER token

  try {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest`, {
      params: { id: TOKEN_ID },
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });

    res.status(200).json(response.data.data[TOKEN_ID]);
  } catch (error) {
    console.error('Error fetching token data:', error);
    res.status(500).json({ error: 'Failed to fetch token data' });
  }
};
