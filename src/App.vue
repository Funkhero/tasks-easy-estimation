<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import LayoutDefault from './layouts/Default';
import LayoutError from './layouts/Error';
import LayoutRoom from './layouts/Room';

export default {
  name: 'App',
  components: {
    LayoutDefault,
    LayoutError,
    LayoutRoom,
  },
  computed: {
    layout() {
      const routeWithLayout = this.$route.matched.find((route) => !!route.meta.layout);
      return routeWithLayout ? `layout${routeWithLayout.meta.layout}` : 'layoutDefault';
    },
  },
};
</script>
