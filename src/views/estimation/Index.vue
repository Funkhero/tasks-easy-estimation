<template>
  <div class="estimation">
    <router-view/>
  </div>
</template>

<script>
import Result from '@/views/estimation/_result';
import List from '@/views/estimation/_list';

export default {
  name: 'Estimation',
  routes: [
    { name: 'estimations-list', path: '', component: List },
    {
      name: 'estimation-result',
      path: 'result/:id',
      component: Result,
      meta: { layout: 'Room' },
    },
  ],
};
</script>
