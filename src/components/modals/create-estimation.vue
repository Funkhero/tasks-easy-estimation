<template>
  <div class="creation-modal">
    <t-title
      size="2"
      class="creation-modal__title"
    >
      Estimation to create
    </t-title>
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

<style lang="scss">
  .creation-modal {
    &__title {
      text-transform: uppercase;
      margin-bottom: 14px;
    }
  }
</style>
