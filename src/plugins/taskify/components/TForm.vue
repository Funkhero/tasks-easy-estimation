<template>
  <form
    class="t-form"
    @submit.prevent="onSubmit"
  >
    <slot/>
  </form>
</template>

<script>
export default {
  name: 'TForm',
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
  .t-form {
    &__row {
      margin-bottom: 20px;
    }
  }
</style>
