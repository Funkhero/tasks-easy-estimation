<template>
  <div
    v-if="component"
    :class="windowClassArray"
    class="modal-window"
    @click="onClick"
  >
    <slot name="before"/>
    <div class="modal-container">
      <component
        :is="component"
        v-bind="componentProps"
        v-on="componentListeners"
        @set-modal-class="modalClass = $event"
      >
        <slot/>
      </component>
      <slot name="container-inner"/>
    </div>
    <slot name="before"/>
  </div>
</template>

<script>
function closeOnEscape(vm) {
  const onEscape = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      window.removeEventListener('keydown', onEscape);
      vm.close();
    }
  };
  window.addEventListener('keydown', onEscape);
}

function dashedCase(str) {
  return str.replace(/[^0-9a-zA-Z]+/g, '-').replace(/([A-Z])/g, (l) => (`-${l}`)).replace(/^-/, '').toLowerCase();
}

export const components = {};

export default {
  name: 'ModalComponent',
  components,
  data() {
    return {
      component: null,
      componentProps: null,
      componentListeners: null,
      modalClass: null,
    };
  },
  computed: {
    windowClassArray() {
      const arr = [];
      if (this.component) arr.push(`modal-window-${dashedCase(this.component.name)}`);
      if (this.modalClass) arr.push(`modal-window-${this.modalClass}`);
      return arr;
    },
    containerClassArray() {
      const arr = [];
      if (this.component) arr.push(`modal-container-${dashedCase(this.component.name)}`);
      if (this.modalClass) arr.push(`modal-container-${this.modalClass}`);
      return arr;
    },
  },
  created() {
    this.$modal.masterComponent = this;
  },
  methods: {
    openModal(component, componentProps, componentListeners) {
      if (!component) throw new Error('Modal plugin: there is no component inside modal');
      const data = { component, componentProps };
      if (this.component) {
        this.$emit('before-close', this.$data);
        this.$emit('closed', null);
      }
      this.$nextTick(() => {
        this.component = component || null;
        this.componentProps = componentProps || null;
        this.componentListeners = componentListeners || null;
        this.modalClass = null;
        this.$emit('opened', data);
        closeOnEscape(true);
      });
      return new Promise((resolve) => {
        this.$emit('closed', resolve);
      });
    },
    close(result) {
      this.$emit('before-close', this.$data);
      this.$nextTick(() => {
        this.component = null;
        this.componentProps = null;
        this.componentListeners = null;
        this.modalClass = null;
        this.$emit('closed', result);
      });
    },
    onClick(event) {
      if (event.target === this.$el) this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
