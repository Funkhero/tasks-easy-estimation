<template>
  <div class="assessment">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Room from './_Room';
import List from './_List';

export default {
  name: 'Assessment',
  routeName: 'assessment',
  routes: [
    { name: 'assessments-list', path: '', component: List },
    { name: 'assessments-room', path: 'room/:id', component: Room },
  ],
};
</script>

<style lang="scss" scoped>
</style>
