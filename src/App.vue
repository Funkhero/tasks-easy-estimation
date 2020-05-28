<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import LayoutDefault from './layouts/Default';
import LayoutError from './layouts/Error';

export default {
  name: 'App',
  components: {
    LayoutDefault,
    LayoutError,
  },
  computed: {
    layout() {
      const routeWithLayout = this.$route.matched.find((route) => !!route.meta.layout);
      return routeWithLayout ? `layout${routeWithLayout.meta.layout}` : 'layoutDefault';
    },
  },
};
</script>
