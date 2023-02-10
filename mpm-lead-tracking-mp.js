function getParams(selector) {
    var src = document.querySelector(selector).getAttribute("src").split("?");
    var args = src[src.length - 1];
    args = args.split("&");
    var parameters = {};
    for (var i = args.length - 1; i >= 0; i--) {
        var parameter = args[i].split("=");
        parameters[parameter[0]] = parameter[1];
    }
    return parameters;
};

(function sendEvent() {
	var Params = getParams("#MPMLeadConversion");
    console.log("Params = ", Params);

    var gcid = Params["gcid"]
	var clientID = Params["clientID"]

    var hitType = 'event';
    var eventCategory = 'MPM Lead Conversion';
    var eventAction = 'thank-you-page';
    var eventLabel = 'Client ID: ' + clientID;


    var url = 'https://www.google-analytics.com/collect?' +
        'v=1&' +
        'tid=UA-108050455-2&' +
        'cid=' + gcid + '&' +
        't=' + hitType + '&' +
        'ec=' + eventCategory + '&' +
        'ea=' + eventAction + '&' +
        'el=' + eventLabel;

    console.log("url = ", url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
})();
