<template>
  <aside class="aside">
    <component
      :is="name"
      v-for="(name, index) in sidebarComponents"
      :key="index"
      class="aside__component"
    />
  </aside>
</template>

<script>
export default {
  name: 'AsideLayout',
  computed: {
    componentsArray() {
      return {
        asideRoom: () => {
          return import('./controlsBlock/users-block');
        },
      };
    },
    sidebarComponents() {
      const currentComponent = 'asideRoom';
      return this.componentsArray[currentComponent];
    },
  },
};
</script>

<style lang="scss" scoped>
  .aside {
    &__component {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
