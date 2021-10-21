# vue-worker-loader-example

an example of Vue2 + webpack4 + ts + worker-loader

# install package

```bash
npm install -D worker-loader
```

# config webpack.config.js

# create define

```ts
//worker-loader.d.ts
declare module "worker-loader!*" {
    // You need to change `Worker`, if you specified a different value for the `workerType` option
    class WebpackWorker extends Worker {
      constructor();
    }
  
    // Uncomment this if you set the `esModule` option to `false`
    // export = WebpackWorker;
    export default WebpackWorker;
}
```

# import worker scripts and init

```ts
import Worker from "worker-loader!./my.worker";

const worker = new Worker();
```