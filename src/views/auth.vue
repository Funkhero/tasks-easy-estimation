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
          v-model="email"
          class="auth-page__field"
          type="text"
          :disabled="loading"
          label="Email"
          placeholder="Enter your email"
          required
        />
        <t-field
          v-model="password"
          class="auth-page__field"
          type="password"
          :disabled="loading"
          label="Password"
          placeholder="Enter your password"
          required
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
export default {
  name: 'AuthPage',
  routeName: 'auth',
  data() {
    return {
      loading: false,
      email: null,
      password: null,
    };
  },
  methods: {
    validateForm() {
    },
    onSubmit() {
      this.validateForm();
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
