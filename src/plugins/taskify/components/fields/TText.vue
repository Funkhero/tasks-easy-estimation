<template>
  <div
    :class="fieldClasses"
    class="t-field-text"
  >
    <input
      type="text"
      :name="name"
    >
  </div>
</template>

<script>
export default {
  name: 'TText',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: [String, Object],
      default: null,
    },
  },
  data() {
    return {
      isFocus: false,
      isFresh: false,
      isFreshTimeout: null,
    };
  },
  computed: {
    fieldClasses() {
      const classes = '';
      return classes;
    },
  },
  mounted() {
    this.$el.value = this.value;
  },
};
</script>

<style lang="scss">
  .t-field-text {
    position: relative;
  }
</style>
