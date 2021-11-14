import loadable from '@loadable/component';

export const LoadableTopPage = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/pages/Top')
);

export const LoadableNotFoundPage = loadable(() => import('../components/pages/NotFound'));
