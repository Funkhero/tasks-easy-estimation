<template>
  <a
    v-if="native"
    :href="url"
    :target="target"
    :class="linkClasses"
    class="t-link"
    @click="$emit('click', $event)"
  >
    <slot/>
  </a>
  <router-link
    v-else
    :target="target"
    :to="url"
    :class="linkClasses"
    class="t-link"
    @click="$emit('click', $event)"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'TLink',
  props: {
    url: {
      type: String,
      default: '#',
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'list-item', 'button'].includes(value);
      },
    },
    target: {
      type: String,
      default: '_self',
    },
    native: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    linkClasses() {
      let result = `t-link_type_${this.type}`;
      result += ` t-link_${this.disabled}`;

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
  .t-link {
    color: $text;
    transition: all .3s ease;
    .svg-icon {
      transition: all .3s ease;
    }
    &_disabled {
      cursor: default;
      pointer-events: none;
      color: $gray;
    }
    &_type {
      &_default {
        text-decoration: underline;
        &:hover {
          color: $red-hover;
          .svg-icon {
            fill: $red-hover;
          }
        }
        &:focus {
          color: $red-focus;
          outline: none;
        }
      }
      &_list-item {
        text-decoration: none;
        display: block;
        &:hover {
          background-color: $gray-light;
        }
        &:focus {
          background-color: $gray;
        }
      }
      &_button {
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 2px;
        color: $red;
        border: 1px solid $red;
        background-color: #fff;
        min-height: 32px;
        padding: 5px 20px;
        &-filled {
          color: #fff;
          background-color: $red;
          text-decoration: none;
        }
        &:hover {
          background-color: $red-hover;
          border-color: $red-hover;
          color: #fff;
        }
        &:focus {
          background-color: $red-focus;
          border-color: $red-focus;
          color: #fff;
          outline: none;
        }
      }
    }
  }
</style>
