# AWS Lambda Async Handler

For when you are deploying a Lambda (Node 6.10) which you're compiling using TypeScript or Babel, and you just want to use async/await for your handler.

NOTE: This is no longer neccesary with Lambda running Node 8.10+, where your handler can be a Promise.

#### You're asked to provide...

```js
exports.myHandler = function(event, context, callback) {
   ...
   // Use callback() and return information to the caller.  
}
```
(Source: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html)

#### But you want your TypeScript to be...

```typescript
import wrapHandler from 'aws-lambda-async-handler'

export const hello = async (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context) => {
  //...
  if (err) {
    throw err
  }
  return result
});
```

#### So you just...

```typescript
import wrapHandler from 'aws-lambda-async-handler'

export const hello = wrapHandler(
   async (event: AWSLambda.APIGatewayEvent, context: AWSLambda.Context) => {});
```

#### OR with native/compiled async/await JavaScript...


```js
const wrapHandler = require('aws-lambda-async-handler').default

exports.myHandler = wrapHandler(async (event, context) => {})
```
