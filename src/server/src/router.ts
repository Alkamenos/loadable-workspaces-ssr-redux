import * as express from 'express';
import path from "path";

export const rootPath = process.cwd();
export const srcPath = path.join(rootPath, 'src');
export const buildPath = path.join(rootPath, 'build');


export function router(app: express.Application) {
  app.use('/favicon.ico', (req, res) => res.status(200).send());
  app.use('/robots.txt', express.static(path.join(buildPath,'robots.txt')));

  // for PWA
  app.use('/service-worker.js', express.static(path.join(buildPath,'service-worker.js')));
  app.use('/manifest.webmanifest', express.static(path.join(buildPath,'manifest.webmanifest')));

  app.use(express.static(buildPath));

}
