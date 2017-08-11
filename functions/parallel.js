/**
 * Created by yuhomiki on 2017/08/11.
 */

"use strict";
const moment = require("moment");

const parallelFunction = (event, context, callback) => {
  console.log(event);
  console.log(`now: ${moment().format("X")}`);

  setTimeout(() => {
    callback(null);
  }, 2000)
};

module.exports = parallelFunction;
