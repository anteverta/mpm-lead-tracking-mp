//get the `gcid` value from the `_ga` cookie
function get_gclid() {
    try {
        // Extract the `_ga` cookie value
        var gcid = document.cookie.match(new RegExp(
            '(?:^|; )' + '_ga' + '=([^;]*)'
            ))[1].match(/\d+\.\d+/g)[1];
            // Return the `gcid` value
            return gcid;
        } catch (e) {
            // Return an empty string in case of error
            return '';
            }
}
  
    // Define a `secretKey` variable to use as encryption key
    //const secretKey = 'secret_key';
    
    // Encrypt the `gcid` value using the `secretKey`
    //const encryptedgcid = CryptoJS.AES.encrypt(gcid, secretKey).toString();

  
  // add the `gcid` value to the links with `ref=mpm`
  function add_gcid_to_links() {
    // Call the `get_gclid` function to get the `gcid` value
    var gcid = get_gclid();
    // Get all `a` elements on the page
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        // Check if the link contains `ref=mpm` in its URL
        const isRefAndClientIdInUrl = links[i].href.indexOf('ref=mpm') !== -1;
      if (isRefAndClientIdInUrl) {
        // Add the `gcid` value to the URL as a query parameter
        links[i].href += '&'+`gcid=${gcid}`;
        // Replace the HTML encoded `&` character with a regular `&`
        links[i].href = links[i].href.replace('#038;','');
      }
    }
  }
  
   // Listen for the `DOMContentLoaded` event and call the `add_gcid_to_links` function
   document.addEventListener('DOMContentLoaded', () => {
    add_gcid_to_links();
    });
  