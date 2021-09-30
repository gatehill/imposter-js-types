const {context, logger, respond} = require("@imposter-js/types");

const request = context.request;

logger.info(`Received ${request.method} request for: ${request.uri}`);

if (request.headers['User-Agent'] === 'bad-actor') {
    respond().withStatusCode(400);
}

if (request.method === 'POST') {
    respond().withStatusCode(201);
} else {
    const body = JSON.stringify({
        "foo": "bar,"
    });
    respond().withStatusCode(200).withData(body);
}
