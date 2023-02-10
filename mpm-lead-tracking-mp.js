function getParams(selector){
    console.log("selector", selector);
    var src = $(selector).attr("src").split("?");    
    var args = src[src.length-1];
    args = args.split("&");
    var parameters = {};
    for(var i=args.length-1; i>=0; i--)
    {
        var parameter = args[i].split("=");
        parameters[parameter[0]] = parameter[1];
    }
    return parameters;
}
	
    var Params = getParams("#MPMLeadConversion")
	console.log("gcid", parameters[gcid])
	console.log("clientID", parameters[clientID])
