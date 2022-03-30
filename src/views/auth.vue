<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <t-title
        size="2"
        class="auth-page__title"
      >
        Hello
      </t-title>
      <p class="auth-page__subtitle">{{ subtitleText }}:</p>
      <div class="auth-page__form">
        <component
          :is="currentForm"
          @form-change="currentForm = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/login-form.vue';
import RegistrationForm from '@/components/auth/registratoin-form.vue';

export default {
  name: 'AuthPage',
  routeName: 'auth',
  components: {
    LoginForm,
    RegistrationForm,
  },
  data() {
    return {
      currentForm: 'login-form',
    };
  },
  computed: {
    subtitleText() {
      return this.currentForm === 'login-form'
        ? 'Pls login with your account'
        : 'Pls create your new account';
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
      border-radius: 6px;
    }
    &__title {
      margin-bottom: 14px;
    }
    &__subtitle {
      margin-bottom: 24px;
    }
  }
</style>
