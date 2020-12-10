const request = require("request");

let front = "https://game.panel.sweplox.net/";
let Auth = "H0k6u1a3XG5wyGguecGAlEbNiqKPsrII5GHHjqBJWdxSRnYL";
/**
 * 
 * @param {String} type 
 * @param {String} name 
 * @param {String} content 
 * @param {Number} ttl 
 * @param {Number} priority 
 * @param {Boolean} proxied 
 */
function createUser(email, username, first_name, last_name) {
    request(front+"api/application/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + Auth,
            "Content-Type": "application/json"
        },
        body: {
            email: "example1110@example.com",
            username: "exampleuser1111",
            first_name: "Example",
            last_name: "User",
        },
        json: true

    }, (err, response, body) => {
        console.log(body)
    })
}

createDNS()

module.exports = {
    createDNS
}