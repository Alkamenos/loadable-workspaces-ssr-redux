/* eslint @typescript-eslint/no-var-requires: 0 */

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import renderer from './controllers/renderer/renderer';
import {router} from './router';

const rootPath = process.cwd();
const srcPath = path.join(rootPath, 'src');
const buildPath = path.join(rootPath, 'build');


export function runServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());

  // HMR
  if (process.env.NODE_ENV === 'development') {

    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const { default: config } = require(path.join(rootPath,'webpack.config.babel'));
    const compiler = webpack(config);
    const devServer = webpackDevMiddleware(compiler, {
      publicPath: '/dist/web',
      writeToDisk(filePath:string) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath)
      },
    });
    app.use(webpackHotMiddleware(compiler));
    app.use(devServer);
    devServer.waitUntilValid(() => {
      router(app);
      app.use(renderer);
    });
    app.listen(+port, 'localhost', () => {
      console.log(`Running on http://localhost:${port}/`);
    });

  }

  // register routes

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    // const server = createServer(app);

    // server.listen(+port,"localhost",10,() => {
    //   console.log(`Listening on ${port}`);
    // });
    //
    // // https://stackoverflow.com/a/48710483/7014700
    // server.on('error', (err: any) => {
    //   if (err.syscall !== 'listen') throw err;
    //   console.log(err);
    //   const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    //
    //   switch (err.code) {
    //     case 'EACCES':
    //       console.error(`${bind} requires elevated privileges`);
    //       process.exit(1);
    //       break;
    //     case 'EADDRINUSE':
    //       console.error(`${bind} is already in use`);
    //       process.exit(1);
    //       break;
    //     default:
    //       throw err;
    //   }
    // });
  }

  return app;
}
