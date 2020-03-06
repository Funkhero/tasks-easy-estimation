<template>
  <component :is="layout">
    <transition name="modal">
      <modal>
        <button
          slot="container-inner"
          type="button"
          class="close-btn"
          @click="$modal.close()"
        >
          close
        </button>
      </modal>
    </transition>
    <router-view/>
  </component>
</template>

<script>
import { ModalComponent as Modal } from '@/plugins/modal';
import LayoutDefault from '@/layouts/default';
import LayoutError from '@/layouts/error';
import LayoutRoom from '@/layouts/result';

export default {
  name: 'App',
  components: {
    Modal,
    LayoutDefault,
    LayoutError,
    LayoutRoom,
  },
  computed: {
    layout() {
      const routeWithLayout = this.$route.matched.find((route) => !!route.meta.layout);
      return routeWithLayout ? `layout${routeWithLayout.meta.layout}` : 'layoutDefault';
    },
  },
};
</script>
