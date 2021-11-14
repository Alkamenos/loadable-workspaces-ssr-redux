import * as path from 'path';
import { resolve } from 'path';
import { Request, Response } from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { renderFullPage } from '../../renderFullPage';

// import { Router, configureStore } from '@mario/client';
const statsFile = resolve(path.join(process.cwd(), "build", "loadable-stats.json"));
const nodeStats = resolve(path.join(process.cwd(), "dist/node/", "loadable-stats.json"));
const webStats = resolve(path.join(process.cwd(), "dist/web/", "loadable-stats.json"));


export default async (req: Request, res: Response) =>{
  const {Router, configureStore} = await import("@mario/client");

  const { store } = configureStore();
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
  const { default: Client } = nodeExtractor.requireEntrypoint()

  const webExtractor = new ChunkExtractor({ statsFile: webStats })
  const jsx = webExtractor.collectChunks(
    <Provider store={store}>
    <Client />
    </Provider>
  )

  const html = renderToString(jsx)

  res.set('content-type', 'text/html')
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="main">${html}</div>
          <script>console.log('html is loaded')</script>
          ${webExtractor.getScriptTags()}
          <script>console.log('html is ready')</script>
        </body>
      </html>
    `)



  // const App = () => (
  //     <Provider store={store}>
  //       <StaticRouter location={req.url}>
  //         {/* add `div` because of `hydrate` */}
  //         <div id="root">
  //           <Router />
  //         </div>
  //       </StaticRouter>
  //     </Provider>
  // );
  //
  // console.log(statsFile);
  //   const extractor = new ChunkExtractor({ statsFile });
  //
  // const tree = extractor.collectChunks(<App />);

    // const body = renderToString(tree);
   // const preloadedState = JSON.stringify(store.getState());
    //const helmetContent = Helmet.renderStatic();
    // const meta = `
    //   ${helmetContent.meta.toString()}
    //   ${helmetContent.title.toString()}
    // `.trim();

    // const scripts = extractor.getScriptTags();

    //return res.send(renderFullPage({ meta, body:html, style:"", preloadedState, scripts:'', graphql:"", nonce:"" }));

}
