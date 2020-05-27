<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import LayoutDefault from './layouts/Default';

export default {
  name: 'App',
  components: {
    LayoutDefault,
  },
  computed: {
    layout() {
      return 'layoutDefault';
    },
  },
};
</script>
