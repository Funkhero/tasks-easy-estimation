<template>
  <div class="layout layout_type_result">
    <page-header/>
    <section class="layout__body">
      <div class="container layout__container">
        <page-aside/>
        <main class="layout__main">
          <slot/>
        </main>
      </div>
    </section>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/layout/header/layout-header.vue';
import PageFooter from '@/components/layout/footer/Layout-footer.vue';
import PageAside from '@/components/layout/aside/Layout-aside.vue';

export default {
  name: 'LayoutResult',
  components: {
    PageHeader,
    PageFooter,
    PageAside,
  },
};
</script>
