<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <t-link
                url="auth"
                class="footer__link"
              >
                Start it now
              </t-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__right">
        <t-link
          url="/"
          class="footer__logo-link"
        >
          <span class="footer__logo"/>
        </t-link>
        <p class="footer__copyright">Copyright © 2020 Task Assessment</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  .footer{
    border-top: 1px solid grey;
    &__container {
      padding: 20px 0;
      height: 100px;
      display: flex;
      justify-content: space-between;
    }
    &__logo {
      width: 80px;
      height: 40px;
      display: inline-block;
      background-size: contain;
      background-image: url('~@img/logo.svg');
      margin-bottom: 20px;
    }
    &__right {
      text-align: center;
    }
  }
</style>
