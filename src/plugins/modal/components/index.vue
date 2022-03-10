<template>
  <div
    v-if="component"
    :class="windowClassArray"
    class="modal-window"
  >
    <div
      class="modal-window__wrapper"
      @click="close()"
    />
    <slot name="before"/>
    <div
      class="modal-container"
      :class="containerClassArray"
    >
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
    <slot name="after"/>
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
      if (this.component) arr.push(`modal-window-${dashedCase(this.component)}`);
      if (this.modalClass) arr.push(`modal-window-${this.modalClass}`);
      return arr;
    },
    containerClassArray() {
      const arr = [];
      if (this.component) arr.push(`modal-container-${dashedCase(this.component)}`);
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
  },
};
</script>

<style lang="scss" scoped>
  .modal-window {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0;
    overflow-y: auto;
    z-index: 99;
    text-align: center;
    &__wrapper {
      height: 100%;
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      z-index: 99;
      background: rgba(grey, .8);
    }
    &:before {
      content:'';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }

  .modal-container {
    position: relative;
    margin: 0 auto;
    background: white;
    padding: 20px;
    min-height: 200px;
    min-width: 300px;
    max-width: 540px;
    width: 100%;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    z-index: 100;
    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  .modal-enter-active {
    transition: opacity .25s ease-out;
    opacity: 1;
    .modal-container {
      transition: transform .25s ease-out;
      transform: none;
    }
  }

   .modal-enter {
     opacity: 0;
     .modal-container {
       transform: translateY(-40px) scale(.9);
     }
   }

  .modal-leave-active {
    transition: opacity .25s ease-out;
    .modal-container {
      transition: transform .25s ease-out;
      transform: translateY(-40px) scale(.9);
    }
  }

  .modal-leave {
    opacity: 1;
    .modal-container {
      transform: none;
    }
    &-to {
      opacity: 0;
    }
  }
</style>
