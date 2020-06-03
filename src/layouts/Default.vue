<template>
  <div class="layout layout_type_default">
    <page-header/>
    <section class="container layout__body">
      <slot/>
    </section>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/layout/header';
import PageFooter from '@/components/layout/footer';

export default {
  name: 'LayoutDefault',
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
