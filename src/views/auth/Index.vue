<template>
  <div class="auth-page">Auth</div>
</template>

<script>
import Registration from './_Registration';
import SignIn from './_SignIn';

export default {
  name: 'AuthPage',
  routeName: 'auth',
  routes: [
    { name: 'registration', path: 'registration', component: Registration },
    { name: 'sign-in', path: 'sign-in', component: SignIn },
  ],
};
</script>

<style lang="scss" scoped>
</style>
