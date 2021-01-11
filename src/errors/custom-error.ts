export abstract class CustomError extends Error {
    abstract statusCode: number

    constructor(message: string) {
        super(message)
        // Only because we are entending a built in class "Error"
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { message: string; field?: string; }[]
}