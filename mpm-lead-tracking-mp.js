var params = (function getparams(selector) {
    console.log('params started. selector = ', params);
    var src = document.querySelector(selector).getAttribute("src").split("?");
    var args = src[src.length - 1];
    args = args.split("&");
    var parameters = {};
    for (var i = args.length - 1; i >= 0; i--) {
        var parameter = args[i].split("=");
        parameters[parameter[0]] = parameter[1];
    }
    return parameters;
})("#MPMLeadConversion");

    console.log('params', params);
    var gcid = params["gcid"];
    console.log('gcid', gcid);
	  var clientID = params["clientID"];
    console.log('clientID', clientID);

(function sendUAEvent() {
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



(function sendGA4Event() {
    const measurement_id = 'G-T7ZQ00WWN3';
    const api_secret = 'e6npRF1-RNKLRccdP8EzHQ';

    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: gcid,
          events: [
            {
              name: 'MPM_Lead_Conversion',
              params: {
                'client_id': clientID
              }
            }
          ]
        })
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));

})();