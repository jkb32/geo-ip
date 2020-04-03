var express = require('express');
var router = express.Router();

var ip2locv6 = require('ip2location-nodejs');
ip2locv6.IP2Location_init("db/ipv6.BIN");

router.get('/check/:checkIp', function(req, res, next) {
    var result = {};

    if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(req.params.checkIp)) {
        result = ip2locv6.IP2Location_get_country_short(req.params.checkIp);
        console.log("Checking IPv4: " + req.params.checkIp);
    } else {
        result = ip2locv6.IP2Location_get_country_short(req.params.checkIp);
        console.log("Checking IPv6: " + req.params.checkIp);
    }

    res.send({country: result});
});

module.exports = router;
