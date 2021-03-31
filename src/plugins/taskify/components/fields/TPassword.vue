<template>
  <div
    :class="inputClasses"
    class="t-password"
  >
    <input
      :type="currentType"
      :name="name"
      :placeholder="placeholder"
      class="form-input t-password__input"
      v-bind="$attrs"
      v-on="inputListeners()"
    >
    <div
      class="t-password__eye"
      @click="toggleType"
    >
      <t-icon name="eye"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TPassword',
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
      currentType: 'password',
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
    toggleType() {
      this.currentType = this.currentType === 'password' ? 'text' : 'password';
    },
    onInput({ target: { value } }) {
      if (value === '' && this.value != null) this.$emit('input', null);
      else if (value !== this.value) this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
  .t-password {
    position: relative;
    margin-bottom: 12px;
    &__eye {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      cursor: pointer;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
