<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <span class="header__logo"/>
      </div>
      <div class="header__right">
        <t-button
          class="header__start"
          @click="$modal.open('test')"
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
    }
    &__right {
      display: flex;
      justify-content: flex-end;
    }
    &__logo {
      display: inline-block;
    }
  }
</style>
