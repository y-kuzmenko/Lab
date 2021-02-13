var cowsay = require('cowsay');
var request = require('request');

var params = {
    url: "http://helloacm.com/api/fortune",
    method: "GET"
};

var callback = function (error, response, body) {
    if (!error) {
        if (response.statusCode === 200) {
            console.log(
                cowsay.say({
                    text: body,
                    e: "oO",
                    T: "U "
                })
            );
        }
    } else {
        console.log('Network error', error);
    }

};


request(params, callback);


