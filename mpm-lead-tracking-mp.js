function getParams(selector) {
    var src = document.querySelector(selector).getAttribute("src").split("?");
    console.log("src", src);
    var args = src[src.length - 1];
    console.log("args", args);
    args = args.split("&");
    var parameters = {};
    for (var i = args.length - 1; i >= 0; i--) {
        var parameter = args[i].split("=");
        parameters[parameter[0]] = parameter[1];
    }
    return parameters;
};

function sendEvent() {
	var Params = getParams("#MPMLeadConversion");
console.log("Params = ", Params);

    var gcid = Params["gcid"]
	var clientID = Params["clientID"]

    var hitType = 'event';
    var eventCategory = 'Measurement Protocol';
    var eventAction = 'lead-path pageview';
    var eventLabel = clientID;


    var url = 'https://www.google-analytics.com/collect?' +
        'v=1&' +
        'tid=UA-108050455-2&' +
        'cid=' + gcid + '&' +
        't=' + hitType + '&' +
        'ec=' + eventCategory + '&' +
        'ea=' + eventAction + '&' +
        'el=' + eventLabel + '&' +
        'ev=' + eventValue;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
}