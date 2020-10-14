<template>
  <div class="login-form">
    <t-form>
      <t-field
        type="select"
        label="Выберите пользователя"
        :value="userName"
      />
    </t-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      userName: '',
    };
  },
};
</script>

<style lang="scss" scoped>
  .login-form {
    position: relative;
  }
</style>
