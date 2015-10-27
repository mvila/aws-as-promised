'use strict';

import { AWS, promisifyAWSMethod } from './common';

export class CloudWatchLogs {
  constructor(options) {
    this.awsClient = new AWS.CloudWatchLogs(options);
  }
}

let methods = [
  'createLogGroup', 'createLogStream', 'deleteLogGroup', 'deleteLogStream',
  'deleteMetricFilter', 'deleteRetentionPolicy', 'describeLogGroups',
  'describeLogStreams', 'describeMetricFilters', 'getLogEvents',
  'putLogEvents', 'putMetricFilter', 'putRetentionPolicy', 'testMetricFilter'
];

for (let method of methods) {
  CloudWatchLogs.prototype[method] = promisifyAWSMethod(method);
}
