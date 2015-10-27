'use strict';

import { AWS, promisifyAWSMethod } from './common';

export class S3 {
  constructor(options) {
    this.awsClient = new AWS.S3(options);
  }
}

let methods = [
  'createBucket',
  'deleteBucket',
  'headBucket',
  'listBuckets',
  'getObject',
  'putObject',
  'deleteObject',
  'listObjects'
];

for (let method of methods) {
  S3.prototype[method] = promisifyAWSMethod(method);
}
