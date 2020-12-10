const request = require("request");

let front = "https://api.cloudflare.com/client/v4/";
let ZONE_ID = process.env.CLOUD_ZONE_ID;
let Auth = process.env.CLOUD_AUTH_TOKEN
/**
 * 
 * @param {String} type 
 * @param {String} name 
 * @param {String} content 
 * @param {Number} ttl 
 * @param {Number} priority 
 * @param {Boolean} proxied 
 */
function createDNS(type, name, content, ttl, priority, proxied) {
    request(front+"zones/"+ZONE_ID+"/dns_records", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + Auth,
            "Content-Type": "application/json"
        },
        body: {
            type: type,
            name: name,
            content: content,
            ttl: ttl,
            priority: priority,
            proxied: proxied,
        },
        json: true

    }, (err, response, body) => {
        console.log(body)
    })
}

module.exports = {
    createDNS
}