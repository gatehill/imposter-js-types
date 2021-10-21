interface Context {
    request: Request;
}

interface Logger {
    trace(message:string, cause?: Throwable): void
    debug(message:string, cause?: Throwable): void
    info(message:string, cause?: Throwable): void
    warn(message:string, cause?: Throwable): void
    error(message:string, cause?: Throwable): void
}

interface Request {
    /**
     * A string containing the request body.
     */
    body: string;

    /**
     * A map containing the request headers.
     */
    headers : Record<string, string>

    /**
     * The HTTP method of the request.
     */
    method: string;

    /**
     * A map containing the request headers with all keys in lowercase.
     */
    normalisedHeaders : Record<string, string>

    /**
     * A map containing the request path parameters.
     */
    pathParams : Record<string, string>

    /**
     * A map containing the request query parameters.
     */
    queryParams : Record<string, string>

    /**
     * The path of the request.
     */
    path: string;

    /**
     * The absolute URI of the request.
     */
    uri: string;
}

interface ResponseBehaviour {
    /**
     * Syntactic sugar to improve readability.
     */
    and(): ResponseBehaviour

    /**
     * Skip the plugin's default behaviour when responding.
     */
    skipDefaultBehaviour(): ResponseBehaviour

    /**
     * Treat the response file or data as a template with placeholders.
     */
    template(): ResponseBehaviour

    /**
     * Use the plugin's default behaviour to respond.
     */
    usingDefaultBehaviour(): ResponseBehaviour

    /**
     * Respond with literal string content. Also see {@link template}.
     * @param data
     */
    withData(data: string): ResponseBehaviour

    /**
     * Respond with empty content, or no records.
     */
    withEmpty(): ResponseBehaviour

    /**
     * Respond with the OpenAPI specification example with a given name.
     * @param exampleName
     */
    withExampleName(exampleName: string): ResponseBehaviour

    /**
     * Respond with the content of a static file. Also see {@link template}.
     * @param filePath
     */
    withFile(filePath: string): ResponseBehaviour

    /**
     * Set a response header.
     * @param key
     * @param value
     */
    withHeader(key: string, value: string): ResponseBehaviour

    /**
     * Set the HTTP status code for the response.
     * @param statusCode
     */
    withStatusCode(statusCode: number): ResponseBehaviour
}

interface Throwable {
}

let context : Context;
let env : Record<string, string>
let logger : Logger;
let respond : () => ResponseBehaviour;

export {context, env, logger, respond};
