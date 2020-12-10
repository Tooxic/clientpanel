const fetch = require('node-fetch');

fetch("https://game.panel.sweplox.net/api/application/servers", {
  "method": "POST",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer H0k6u1a3XG5wyGguecGAlEbNiqKPsrII5GHHjqBJWdxSRnYL",
    "cookie": "pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D"
  },
  "body": {
    "name": "Building",
    "user": 1,
    "egg": 1,
    "docker_image": "quay.io/pterodactyl/core:java",
    "startup": "java -Xms128M -Xmx128M -jar server.jar",
    "environment": {
      "BUNGEE_VERSION": "latest",
      "SERVER_JARFILE": "server.jar"
    },
    "limits": {
      "memory": 128,
      "swap": 0,
      "disk": 512,
      "io": 500,
      "cpu": 100
    },
    "feature_limits": {
      "databases": 5,
      "backups": 1
    },
    "allocation": {
      "default": 17
    }
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));