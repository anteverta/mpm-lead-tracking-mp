//Adding the cookie saved in the first step as the script parameter 
var params = (function(){ 
  var cookiearr = document.cookie.split("; ");
  var cookieitems = {};

    for (var i = cookiearr.length - 1; i >= 0; i--) {
        var item = cookiearr[i].split(/=(.*?)(;|$)/);
        cookieitems[item[0]] = item[1];
    }
    return cookieitems['mpmReferral']
})();

//console.log("params = ", params);
  
  (function(d, s){
    // Select the first script element on the page
    var js, fjs = d.getElementsByTagName(s)[0];

    // Create a new script element with the specified ID
    js = d.createElement(s);
    js.id = 'MPMLeadConversion';

    // Set the src attribute of the script element to the URL of the script plus the params
    js.src = "https://rawcdn.githack.com/anteverta/mpm-lead-tracking-mp/b101fe057164f2f9bc99a8e7624afc26785ba397/mpm-lead-tracking-mp.js" + params;

    // Insert the new script element into the page before the first script element
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script'));
