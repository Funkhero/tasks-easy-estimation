<template>
  <div class="assessment">
    <router-view/>
  </div>
</template>

<script>
import Room from '@/views/assessment/_Room';
import List from '@/views/assessment/_List';

export default {
  name: 'Assessment',
  routeName: 'assessment',
  routes: [
    { name: 'assessments-list', path: '', component: List },
    {
      name: 'assessments-room',
      path: 'room/:id',
      component: Room,
      meta: { layout: 'Room' },
    },
  ],
};
</script>
