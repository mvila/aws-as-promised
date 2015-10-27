# aws-as-promised [![Build Status](https://travis-ci.org/mvila/aws-as-promised.svg?branch=master)](https://travis-ci.org/mvila/aws-as-promised)

Yet another [AWS SDK](https://aws.amazon.com/sdk-for-node-js/) promise wrapper.

### Why yet another?

Because every wrapper I found does things that I don't want:

- I don't want a dependency on a promise library. ES6 is there, and if it isn't, there are [polyfills](https://www.npmjs.com/package/core-js).
- I don't want a different API than the original [AWS SDK](https://aws.amazon.com/sdk-for-node-js/). I just want the same API with promises.

## Installation

```
npm install --save aws-as-promised
```

## Usage

```javascript
import { S3 } from 'aws-as-promised';

let s3 = new S3({ /* options */ });

async function example() {
  let data = await s3.getObject({ Bucket: 'bucket-name', Key: 'object-key' });
};
```

## To do

- Complete the API (I implemented only what I needed).

## License

MIT
