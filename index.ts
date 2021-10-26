interface Context {
    request: Request;
}

interface Logger {
    trace(message: string, cause?: Throwable): void

    debug(message: string, cause?: Throwable): void

    info(message: string, cause?: Throwable): void

    warn(message: string, cause?: Throwable): void

    error(message: string, cause?: Throwable): void
}

interface Request {
    /**
     * A string containing the request body.
     */
    body: string;

    /**
     * A map containing the request headers.
     */
    headers: Record<string, string>

    /**
     * The HTTP method of the request.
     */
    method: string;

    /**
     * A map containing the request headers with all keys in lowercase.
     */
    normalisedHeaders: Record<string, string>

    /**
     * A map containing the request path parameters.
     */
    pathParams: Record<string, string>

    /**
     * A map containing the request query parameters.
     */
    queryParams: Record<string, string>

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

    /**
     * Delay for an exact period in milliseconds before the response is transmitted to the client.
     * @param delay
     */
    withDelay(delay: number): ResponseBehaviour

    /**
     * Delay for a period in milliseconds within a given range before the response is transmitted to the client.
     *
     * A random value (roughly uniformly distributed) will be selected between the minimum and maximum range values.
     * @param min
     * @param max
     */
    withDelayRange(min: number, max: number): ResponseBehaviour
}

interface Store extends Record<string, any> {
    /**
     * Delete an item.
     * @param key
     */
    delete(key: string): void

    /**
     * Check for the presence of an item by key.
     * @param key
     */
    hasItemWithKey(key: string): boolean

    /**
     * Load an item.
     * @param key
     */
    load<T>(key: string): T

    /**
     * Load all items.
     */
    loadAll<T>(): Record<string, any>[]

    /**
     * Save an item.
     * @param key
     * @param value
     */
    save(key: string, value: any): void
}

interface Stores {
    open(storeName: string): Store
}

interface Throwable {
}

let context: Context;
let env: Record<string, string>
let logger: Logger;
let respond: () => ResponseBehaviour;
let stores: Stores;

export {context, env, logger, respond, stores};
