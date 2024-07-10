module.exports = (req, res) => {
  console.log('API route hit');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'API is working',
    id: 31798,
    name: "JENNER",
    symbol: "JENNER",
    slug: "jenner",
    cmc_rank: 3000,
    num_market_pairs: 1,
    circulating_supply: 1000000000,
    total_supply: 1000000000,
    max_supply: 1000000000,
    infinite_supply: false,
    last_updated: "2023-07-09T12:00:00.000Z",
    date_added: "2023-01-01T00:00:00.000Z",
    tags: ["meme"],
    platform: null,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    quote: {
      USD: {
        price: 0.000001,
        volume_24h: 100000,
        volume_change_24h: 10,
        percent_change_1h: 0.5,
        percent_change_24h: 5,
        percent_change_7d: 15,
        market_cap: 1000000,
        market_cap_dominance: 0.0001,
        fully_diluted_market_cap: 1000000,
        last_updated: "2023-07-09T12:00:00.000Z"
      }
    }
  });
};
