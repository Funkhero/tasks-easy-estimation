<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <nav class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <t-link
                v-if="$route.name !== 'auth'"
                class="footer__link"
                @click.prevent="$modal.open('create-estimation')"
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
          <img
            :src="logo"
            class="footer__logo"
          />
        </t-link>
        <p class="footer__copyright">Copyright © 2022 Task Assessment</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '@img/logo.svg';

export default {
  name: 'FooterLayout',
  data() {
    return {
      logo,
    };
  },
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
      display: inline-block;
      margin-bottom: 20px;
    }
    &__right {
      text-align: center;
    }
  }
</style>
