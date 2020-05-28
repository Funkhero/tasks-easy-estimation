<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <router-link
                to="/"
                class="footer__link"
              >
                Start it now
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__right">
        <router-link
          to="/"
          class="footer__logo-link"
        >
          <span class="footer__logo"/>
        </router-link>
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
      height: 140px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
