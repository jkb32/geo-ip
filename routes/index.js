var express = require('express');
var router = express.Router();
var ip2locv4 = require('ip2location-nodejs');
var ip2locv6 = require('ip2location-nodejs');

router.get('/check/:checkIp', function(req, res, next) {
    var result = {};

    if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(req.params.checkIp)) {
        ip2locv4.IP2Location_init("db/ipv4.BIN");
        result = ip2locv4.IP2Location_get_country_short(req.params.checkIp);
        console.log("Checking IPv4: " + req.params.checkIp);
    } else {
        ip2locv6.IP2Location_init("db/ipv6.BIN");
        result = ip2locv6.IP2Location_get_country_short(req.params.checkIp);
        console.log("Checking IPv6: " + req.params.checkIp);
    }

    res.send({country: result});
});

module.exports = router;
