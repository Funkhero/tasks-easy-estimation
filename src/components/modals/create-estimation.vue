<template>
  <div class="creation-modal">
    <h3 class="creation-modal__title">Estimation to create</h3>
    <estimation-creation
      class="creation-modal__form"
    />
  </div>
</template>

<script>
import EstimationCreation from '@/components/estimation/creation';

export default {
  name: 'CreationModal',
  components: {
    EstimationCreation,
  },
};
</script>
