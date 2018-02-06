export type AWSLambdaAsyncHandler<E, R> = (event: E, context: AWSLambda.Context) => Promise<R>;

function wrapHandler<Event, Response>(handler: AWSLambdaAsyncHandler<Event, Response>): AWSLambda.Handler {
  return (event: Event, context: AWSLambda.Context, callback: AWSLambda.Callback) => {
    handler(event, context)
      .then((response: Response) => {
        callback(null, response);
      })
      .catch(callback);
  };
}

export default wrapHandler;
