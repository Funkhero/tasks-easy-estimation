import Vue from 'vue';
import Router from 'vue-router';

import { requireAll } from '@/utilities';

Vue.use(Router);

const routes = [];
let route404 = null;

function registerRoute(path, component) {
  const route = {
    path,
    component,
    name: component.routeName,
    meta: component.routeMeta,
  };

  if (route.path === '/404') {
    route.path = '*';
    if (!route.meta) route.meta = { statusCode: 404 };
    else if (!route.meta.statusCode) route.meta.statusCode = 404;
    route404 = route;
  } else {
    if (route.path === '') route.path = '/';
    if (component.routes) route.children = component.routes;

    route.props = component.routeProps === undefined ? true : component.routeProps;

    routes.push(route);
  }
}

requireAll(require.context('./views/', true, /^(?:(?!\/?_).)+\.(vue|js)$/), (component, name) => {
  const filePath = name.substr(1).replace(/(\/Index)?\.[a-zA-Z0-9]+$/, '');
  component.routeFilePath = filePath;
  if (component.routePath) {
    (Array.isArray(component.routePath) ? component.routePath : [component.routePath]).forEach((path) => {
      registerRoute(`${filePath}/${path}`, component);
    });
  } else registerRoute(filePath, component);
});

if (route404) routes.push(route404);

const router = new Router({
  routes,
  mode: 'history',
});

export default router;
