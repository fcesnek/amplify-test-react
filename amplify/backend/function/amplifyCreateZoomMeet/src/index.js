const jwt = require('jsonwebtoken');
const config = require('./config');
const rp = require('request-promise');

exports.handler = function (event, _, callback) {
  let email = "filip.cesnek@gmail.com";

  const payload = {
    iss: config.APIKey,
    exp: ((new Date()).getTime() + 5000)
  };
  const token = jwt.sign(payload, config.APISecret);
  const { topic, start_time, duration } = event.arguments;
  const options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic,
      type: 2,
      start_time,
      duration,
      timezone: "CET",
      settings: {
        host_video: "true",
        participant_video: "true",
        mute_upon_entry: "true"
      }
    },
    auth: {
      bearer: token
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json"
    },
    json: true
  };

  rp(options)
    .then(function(response) {
      callback(null, response)
    })
    .catch(function(err) {
      callback(err)
    });
}
