import {context, logger, respond} from "@imposter-js/types";

console.info(`context: ${context}`);

const request = context.request;

if (request.headers['User-Agent'] === 'bad-actor') {
    respond().withStatusCode(400);
}

const body = JSON.stringify({
    "id": 'foo',
});

if (request.method === 'POST') {
    respond().withStatusCode(201).withData(body);
} else {
    respond().withStatusCode(200).withData(body);
}
