import {context, respond} from "@imposter-js/types"
import {generateName} from "./names"

console.info(`context: ${context}`)

const request = context.request

if (request.headers['User-Agent'] === 'bad-actor') {
    respond().withStatusCode(400)

} else {
    const body = JSON.stringify({
        "name": generateName(),
    })

    respond()
        .withStatusCode(200)
        .withData(body)
}
