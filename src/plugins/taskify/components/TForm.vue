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
