import {context, respond} from "@imposter-js/types"
import {generateName} from "./names"
import {incrementCounter} from "./counter"

console.info(`context: ${context}`)

const request = context.request

if (request.headers['User-Agent'] === 'bad-actor') {
    respond().withStatusCode(400)

} else {
    const body = JSON.stringify({
        "name": generateName(),
    })

    const counter = incrementCounter()

    respond()
        .withStatusCode(200)
        .withHeader('X-Counter', counter.toString())
        .withData(body)
}
