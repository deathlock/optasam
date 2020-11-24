var express = require('express');
const axios = require('axios');
var router = express.Router();


/* GET home page. */
router.post('/',function(req, res, next) {
    var symbol = (req.body.symbol).toUpperCase();
    if(!req.body.symbol) {
        res.json("Symbol is required.")
    }
    axios.get(`https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`, {
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)",
        "Referer": "http://www.nseindia.com/",
        "Accept": '*/*',
        "set-cookie": "bm_sv=AAFB342F70E543A8ADDD3046D3EAF08A~8Dgb5sdm1jm7Pv11luNW1eHWzTmZZ2HBzYqurE1f4Hc4IEx5S784foXq7CdjVJXA0g33coFE3bBLgNSgAlWeE4oWCnnsbgoeVb3GiKdI9fIO8p2HUnKwIlSshLUgvZLFijoQnabR3ViPKe+hxoPzvn8wlLClY36HGJmp41Xt3dI=; Domain=.nseindia.com; Path=/; Max-Age=6959; HttpOnly"
    }, {withCredentials: true})
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
    })
});
  

module.exports = router;