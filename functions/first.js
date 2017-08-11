/**
 * Created by yuhomiki on 2017/08/11.
 */

"use strict";

const firstFunction = (event, context, callback) => {
  console.log("Call First Function");
  callback(null, {
    ids: ["a", "b", "c", "d", "e", "f"]
  });
};

module.exports = firstFunction;
