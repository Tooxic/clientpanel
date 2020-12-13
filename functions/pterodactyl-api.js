const request = require("request");
const User = require('../models/User');

let front = "https://game.panel.sweplox.net/";
let Auth = process.env.AUTH_TOKEN;
/**
 * 
 * @param {String} type 
 * @param {String} name 
 * @param {String} content 
 * @param {Number} ttl 
 * @param {Number} priority 
 * @param {Boolean} proxied 
 */

var crypto = require("crypto");
var r = crypto.randomBytes(10).toString('hex');

function createServer(email, username, first_name, last_name) {
    User.findOne({ pterodactyl_user_id: pterodactyl_user })
    request(front+"api/application/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + Auth,
            "Content-Type": "application/json"
        },
        body: {
            name: "Building",
            user: pterodactyl_user,
            egg: 1,
            docker_image: "quay.io/pterodactyl/core:java",
            startup: "java -Xms128M -Xmx128M -jar server.jar",
            environment: {
              BUNGEE_VERSION: "latest",
              SERVER_JARFILE: "server.jar",
            },
            limits: {
              memory: 128,
              swap: 0,
              disk: 512,
              io: 500,
              cpu: 100
            },
            feature_limits: {
              databases: 5,
              backups: 1
            },
            allocation: {
              default: 17
            },
            json: true
        }
        }, (err, response, body) => {
            console.log(body)
        })
    }

function changeDisk(email, username, first_name, last_name) {
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

function changeRam(email, username, first_name, last_name) {
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

function changeCores(email, username, first_name, last_name) {
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

function addDatabase(email, username, first_name, last_name) {
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

module.exports = server_create;

createUser()