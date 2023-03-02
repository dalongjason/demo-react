// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/project/sandbox/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index')}),
    "exact": true
  },
  {
    "path": "/about",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__About' */'@/pages/About')}),
    "exact": true
  },
  {
    "path": "/useFetch",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__useFetch' */'@/pages/useFetch')}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
