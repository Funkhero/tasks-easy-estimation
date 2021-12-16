<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <t-link url="/">
          <div class="header__logo"/>
        </t-link>
      </div>
      <div class="header__right">
        <t-button
          class="header__start"
          @click="$modal.open('create-estimation')"
        >
          Start it now
        </t-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid grey;
    &__container {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__right {
      display: flex;
      justify-content: flex-end;
    }
    &__logo {
      width: 80px;
      height: 40px;
      display: inline-block;
      background-size: contain;
      background-image: url('~@img/logo.svg');
    }
  }
</style>
