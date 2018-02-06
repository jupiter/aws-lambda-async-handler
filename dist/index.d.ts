export declare type AWSLambdaAsyncHandler<E, R> = (event: E, context: AWSLambda.Context) => Promise<R>;
declare function wrapHandler<E, R>(handler: AWSLambdaAsyncHandler<E, R>): AWSLambda.Handler;
export default wrapHandler;
