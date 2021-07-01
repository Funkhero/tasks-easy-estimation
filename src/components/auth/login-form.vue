<template>
  <div class="login-form">
    <auth-form
      :form-fields="formFields"
      :button-text="type"
      :loading="loading"
      @blur-field="validateField"
      @submit="onSubmit"
    />
    <div class="login-form__bottom">
      <t-link
        native
        class="login-form__change"
        @click.prevent="$emit('form-change', 'registration-form')"
      >
        Registration
      </t-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  validate,
  required,
  length,
  email,
} from '@/utilities/validation';
import AuthForm from '@/components/auth/form.vue';

export default {
  name: 'LoginForm',
  components: {
    AuthForm,
  },
  data() {
    return {
      type: 'Login',
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
    ...mapActions('user', [
      'fetchUserProfile',
    ]),
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
    async onSubmit() {
      if (!this.validateForm()) return console.log('form invalid');

      try {
        const res = await this.fetchUserProfile();
        console.log('user logged!', res);
        this.$router.push('assessment');
      } catch (e) {
        console.log('Login error', e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-form {
    &__bottom {
      text-align: center;
      margin-top: 12px;
    }
  }
</style>
