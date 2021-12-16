<template>
  <div class="t-field">
    <div
      :class="{'t-field__label_required': required}"
      class="t-field__label"
      v-html="label"
    />
    <component
      :is="'t-' + type"
      v-bind="$attrs"
      :value="value"
      class="t-field__item"
      :class="fieldClasses"
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
    <div
      v-if="hasError"
      class="t-field__error"
      v-text="errors[0]"
    />
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
        return ['text', 'file', 'email', 'password', 'search', 'textarea', 'select'].includes(value);
      },
    },
    label: {
      type: String,
      default: null,
    },
    errors: {
      type: [Array, Boolean],
      default: false,
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
    hasError() {
      return this.errors && this.errors.length;
    },
    fieldClasses() {
      return {
        error: this.hasError,
      };
    },
  },
};
</script>

<style lang="scss">
  .t-field {
    position: relative;
    &__label {
      font-size: 14px;
      line-height: 1;
      margin-bottom: 12px;
      display: inline-block;
      &_required {
        position: relative;
        &:after {
          content: '*';
          color: $red;
          position: absolute;
          left: 100%;
          top: 0;
        }
      }
    }
    &__error {
      position: absolute;
      color: $red;
      top: 0;
      right: 0;
    }
  }
</style>
