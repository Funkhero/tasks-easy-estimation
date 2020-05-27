<template>
  <div class="assessment">
    <router-view/>
  </div>
</template>

<script>
import Room from './_Room';
import List from './_List';

export default {
  name: 'Assessment',
  routeName: 'assessment',
  routes: [
    { name: 'list', path: '', component: List },
    { name: 'room', path: 'room', component: Room },
  ],
};
</script>

<style lang="scss" scoped>
</style>
