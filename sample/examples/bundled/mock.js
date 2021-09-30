"use strict";
var _a = require("@imposter-js/types"), context = _a.context, logger = _a.logger, respond = _a.respond;
var request = context.request;
logger.info("Received " + request.method + " request for: " + request.uri);
if (request.headers['User-Agent'] === 'bad-actor') {
    respond().withStatusCode(400);
}
if (request.method === 'POST') {
    respond().withStatusCode(201);
}
else {
    var body = JSON.stringify({
        "foo": "bar,"
    });
    respond().withStatusCode(200).withData(body);
}
