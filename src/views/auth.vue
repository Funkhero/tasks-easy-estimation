<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <t-title class="auth-page__title">Hello</t-title>
      <p class="auth-page__subtitle">Pls login with your account:</p>
      <t-form
        class="auth-page__form"
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
          @blur="validateField(key)"
        />
        <t-button
          type="submit"
          class="auth-page__button"
        >
          Login
        </t-button>
      </t-form>
    </div>
  </div>
</template>

<script>
import {
  validate,
  required,
  length,
  email,
} from '@/utilities/validation';

export default {
  name: 'AuthPage',
  routeName: 'auth',
  data() {
    return {
      loading: false,
      formFields: {
        email: {
          props: {
            type: 'text',
            label: 'Email',
            placeholder: 'Enter your email',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value) => validate([required, length(2, 30), email], value),
        },
        password: {
          props: {
            type: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value) => validate([required, length(3, 15)], value),
        },
      },
    };
  },
  methods: {
    validateField(key) {
      this.formFields[key].errors = this.formFields[key].validate(this.formFields[key].value);
      return this.formFields[key].errors;
    },
    validateForm() {
      let errors = [];
      Object.keys(this.formFields).forEach((key) => {
        const fieldErrors = this.validateField(key);
        if (fieldErrors?.length) errors = [...errors, ...fieldErrors];
      });
      return errors.length === 0;
    },
    onSubmit() {
      if (!this.validateForm()) return console.log('form invalid');

      console.log('user logged!');
      this.$router.push('assessment');
    },
  },
};
</script>

<style lang="scss" scoped>
  .auth-page {
    &__wrapper {
      border: 1px solid grey;
      max-width: 540px;
      width: 100%;
      margin: 0 auto;
      padding: 40px;
    }
    &__title {
      margin-bottom: 14px;
    }
    &__subtitle {
      margin-bottom: 24px;
    }
  }
</style>
