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
    body: string;
    headers : Record<string, string>
    method: string;
    normalisedHeaders : Record<string, string>
    pathParams : Record<string, string>
    queryParams : Record<string, string>
    path: string;
    uri: string;
}

interface ResponseBehaviour {
    withStatusCode(statusCode: number): ResponseBehaviour;
    withData(data: string): ResponseBehaviour
    withFile(filePath: string): ResponseBehaviour
    template(): ResponseBehaviour
}

interface Throwable {
}

let context : Context;
let env : Record<string, string>
let logger : Logger;
let respond : () => ResponseBehaviour;

export {context, env, logger, respond};
