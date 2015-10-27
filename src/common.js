'use strict';

export { default as AWS } from 'aws-sdk';

export function promisifyAWSMethod(method) {
  return function(params) {
    return new Promise((resolve, reject) => {
      this.awsClient[method](params, function(err, res) {
        if (err) reject(err); else resolve(res);
      });
    });
  };
}
