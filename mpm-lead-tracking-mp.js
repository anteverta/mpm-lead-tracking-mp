function getParams(selector) {
    var src = document.querySelector(selector).getAttribute("src").split("?");
    console.log("src", src);
    var args = src[src.length - 1];
    console.log("args", args);
    args = args.split("&");
    var parameters = {};
    for (var i = args.length - 1; i >= 0; i--) {
        var parameter = args[i].split("=");
        console.log("args[i]", args[i]);
        console.log("parameter", parameter);
        parameters[parameter[0]] = parameter[1];
        console.log("parameters", parameters);
    }
    return parameters;
};

var Params = getParams("#MPMLeadConversion");
console.log("gcid", Params[gcid]);
console.log("clientID", Params[clientID]);