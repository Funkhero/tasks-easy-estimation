<template>
  <t-form
    @submit="onSubmit"
  >
    <t-field
      v-for="(field, key) in formFields"
      :key="key"
      v-model="field.value"
      v-bind="field.props"
      :errors="field.errors"
      :disabled="loading"
      class="auth-page__field"
      @blur="$emit('blur-field', key)"
    />
    <t-button
      type="submit"
      class="auth-page__button"
    >
      {{ buttonText }}
    </t-button>
  </t-form>
</template>

<script>
export default {
  name: 'AuthForm',
  props: {
    formFields: {
      type: Object,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>
