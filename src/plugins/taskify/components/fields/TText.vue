<template>
  <div
    :class="inputClasses"
    class="t-text"
  >
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      class="form-input t-text__input"
      v-bind="$attrs"
      v-on="inputListeners()"
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
    inputClasses() {
      const result = {
        'has-error': this.error,
      };

      return result;
    },
  },
  methods: {
    inputListeners() {
      return { ...this.$listeners, input: this.onInput };
    },
    onInput({ target }) {
      const { value } = target;

      if (value === '' && this.value !== null) this.$emit('input', null);
      else if (value !== this.value) this.$emit('input', value);

      if (target.value !== value) target.value = value;
    },
  },
};
</script>

<style lang="scss">
  .t-text {
    position: relative;
    margin-bottom: 12px;
  }
</style>
