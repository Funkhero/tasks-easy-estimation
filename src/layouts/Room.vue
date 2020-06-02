<template>
  <div class="layout layout_type_room">
    <page-header/>
    <section class="layout__body">
      <div class=" layout__container">
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
import PageHeader from '../components/layout/header';
import PageFooter from '../components/layout/footer';
import PageAside from '../components/layout/aside';

export default {
  name: 'LayoutRoom',
  components: {
    PageHeader,
    PageFooter,
    PageAside,
  },
};
</script>
