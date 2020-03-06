import Vue from 'vue';
import Router from 'vue-router';
import { requireAll } from '@/utilities';
import store from './store';

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

function checkPermissions(matchedRoutes, authUserRole) {
  let result = true;

  for (let i = matchedRoutes.length - 1; i >= 0; i--) {
    const route = matchedRoutes[i];
    result = route.meta.permissions ? route.meta.permissions.includes(authUserRole) : true;

    if (!result) break;
  }

  return result;
}

router.beforeEach((to, from, next) => {
  const authUserRole = store.getters['user/authUser']?.role;
  const userCanToViewThisPage = checkPermissions(to.matched, authUserRole);

  if (authUserRole === 'guest') {
    if (to.matched[0].path !== '/auth') {
      next({ name: 'auth' });
    } else {
      next();
    }
  } else if (userCanToViewThisPage) {
    next();
  } else {
    next(false);
  }
});

export default router;
