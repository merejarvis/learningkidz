
const rp = require('request-promise');
const url = 'http://www.propertyguru.com.sg/property-for-sale?market=residential';


function requestUrl(url) {
  return rp(url);
};


exports.Scraper = async (req, res) => {
    try {
        const result = await rp(url);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

    res.status(200).json({ result });
};