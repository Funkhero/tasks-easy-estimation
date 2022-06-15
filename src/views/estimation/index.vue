<template>
  <div class="estimation">
    <router-view/>
  </div>
</template>

<script>
import Result from '@/views/estimation/_result';
import List from '@/views/estimation/_list';
import Conversation from '@/views/estimation/_conversation';

export default {
  name: 'EstimationView',
  routes: [
    {
      name: 'estimations-list',
      path: '',
      component: List,
    },
    {
      name: 'estimation-result',
      path: 'result/:id',
      component: Result,
      meta: { layout: 'Room' },
    },
    {
      name: 'estimation-conversation',
      path: 'conversation/:id',
      component: Conversation,
      meta: { layout: 'Room' },
    },
  ],
};
</script>
