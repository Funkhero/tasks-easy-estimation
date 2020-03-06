<template>
  <div
    :class="fieldClasses"
    class="t-field-select"
  >
    <select
      :id="name"
      :name="name"
      class="t-field-select__native"
    >
      <option value="1">text</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TSelect',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
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
  .t-field-select {
    position: relative;
  }
</style>
