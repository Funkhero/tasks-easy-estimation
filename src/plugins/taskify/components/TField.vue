<template>
  <div
    :class="fieldClasses"
    class="t-field"
  >
    <div
      class="t-field__label"
      v-html="label"
    />
    <component
      :is="'field-' + type"
      v-bind="$attrs"
      :value="value"
      class="t-field__item"
      v-on="$listeners"
      @focus="inFocus = true"
      @blur="inFocus = false"
    >
      <slot
        v-for="(item, name) in $slots"
        :slot="name"
        :name="name"
      />
    </component>
  </div>
</template>

<script>
export default {
  name: 'TField',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'url', 'email', 'password', 'search', 'textarea', 'select'].includes(value);
      },
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    error: {
      type: [String, Object],
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
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
  .t-field {
    position: relative;
  }
</style>
