<template>
  <div class="registration-form">
    <auth-form
      :form-fields="formFields"
      :button-text="type"
      :loading="loading"
      @blur-field="validateField"
      @submit="onSubmit"
    />
    <div class="registration-form__bottom">
      <t-link
        native
        class="registration-form__change"
        @click.prevent="$emit('form-change', 'login-form')"
      >
        Login
      </t-link>
    </div>
  </div>
</template>

<script>
import {
  validate,
  required,
  length,
  email,
  equalPassword,
} from '@/utilities/validation';
import AuthForm from '@/components/auth/form.vue';

export default {
  name: 'RegistrationForm',
  components: {
    AuthForm,
  },
  data() {
    return {
      type: 'Registration',
      loading: false,
      formFields: {
        name: {
          props: {
            type: 'text',
            label: 'Name',
            placeholder: 'Enter your name',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value) => validate([required, length(2, 30)], value),
        },
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
        repeatPassword: {
          props: {
            type: 'password',
            label: 'Repeat password',
            placeholder: 'Repeat your password',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value, equalValue) => validate([required, length(3, 15), equalPassword(equalValue)], value),
        },
      },
    };
  },
  methods: {
    validateField(key) {
      if (key === 'repeatPassword') {
        this.formFields[key].errors = this.formFields.password.value
          && this.formFields[key].validate(this.formFields[key].value, this.formFields.password.value);
      } else {
        this.formFields[key].errors = this.formFields[key].validate(this.formFields[key].value);
      }
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
  .registration-form {
    &__bottom {
      text-align: center;
      margin-top: 12px;
    }
  }
</style>
