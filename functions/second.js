/**
 * Created by yuhomiki on 2017/08/11.
 */

"use strict";

const AWS = require("aws-sdk");

const secondFunction = (event, context, callback) => {
  console.log("Call Second Function");
  console.log(event);
  const targetLambdaArn = process.env.TARGET_LAMBDA_ARN;

  if (!targetLambdaArn) {
    console.log("no target");
    return callback(null);
  }
  console.log(targetLambdaArn);
  const lambda = new AWS.Lambda();
  const ids = event.ids;

  Promise.all(ids.map((id) => {
    return lambda.invoke({
      FunctionName: targetLambdaArn,
      Payload: JSON.stringify({id: id})
    }).promise();
  })).then(() => {
    return callback(null);
  }).catch((err) => {
    return callback(err);
  });
};

module.exports = secondFunction;
