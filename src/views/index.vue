<template>
  <div class="main-page">
    <div class="main-page__left-side">
      <img
        :src="agile"
        class="main-page__pic"
      />
      <h2 class="main-page__title">Sprint planning made easy</h2>
      <h3 class="main-page__subtitle">Make the estimates process a pleasure</h3>
      <p class="main-page__text">Task estimation - cool tool for your sprint planning in your team.</p>
    </div>
    <div class="main-page__right-side">
      <t-button
        class="main-page__start-button"
        element="link"
        size="big"
        url="estimation"
      >
        Get to work
      </t-button>
    </div>
  </div>
</template>

<script>
import agile from '@img/agile.png';

export default {
  name: 'MainPage',
  data() {
    return {
      agile,
    };
  },
};
</script>

<style lang="scss" scoped>
  .main-page {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    padding: 60px 0;
    &__left-side {
      text-align: center;
    }
    &__right-side {
      display: flex;
      align-items: center;
    }
    &__pic {
      width: 120px;
      margin: 0 auto 12px;
    }
    &__title {
      font-size: 32px;
      margin-bottom: 12px;
    }
    &__subtitle {
      font-size: 28px;
      margin-bottom: 12px;
    }
    &__text {
      font-size: 18px;
    }
  }
</style>
