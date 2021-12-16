<template>
  <button
    v-if="element === 'button'"
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    class="t-button"
    @click="$emit('click', $event)"
  >
    <slot/>
  </button>
  <router-link
    v-else
    :to="url"
    :class="buttonClasses"
    :disabled="disabled"
    class="t-button"
    @click="$emit('click', $event)"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'TButton',
  props: {
    type: {
      type: String,
      default: '',
    },
    element: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'link'].includes(value);
      },
    },
    view: {
      type: String,
      default: 'fill',
      validator(value) {
        return ['fill', 'empty', 'icon', 'flat'].includes(value);
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'small', 'big'].includes(value);
      },
    },
    url: {
      type: String,
      default: '/',
    },
    lowerCased: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      let result = `t-button_view_${this.view}`;
      result += ` t-button_size_${this.size}`;
      result += this.lowerCased ? ' t-button_lower-cased' : '';

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
  .t-button {
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 13px;
    border-width: 1px;
    border-style: solid;
    border-color: $red;
    border-radius: 2px;
    cursor: pointer;
    max-width: 100%;
    text-transform: uppercase;
    transition: all .3s ease;
    text-decoration: none;
    text-align: center;
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
    &:disabled {
      border-color: $gray;
      pointer-events: none;
      cursor: default;
      &:hover {
        background-color: #fff;
      }
      &:focus {
        background-color: #fff;
      }
    }
    &_size {
      &_normal {
        font-size: 16px;
        height: 34px;
        line-height: 30px;
        padding: 0 16px;
      }
      &_small {
        font-weight: 500;
        text-transform: none;
        height: 22px;
        line-height: 22px;
        padding: 0 10px;
      }
      &_big {
        font-size: 22px;
        height: 50px;
        line-height: 50px;
        padding: 0 4px;
        width: 100%;
      }
      &_content {
        padding: 0;
      }
    }
    &_view {
      &_fill {
        background-color: $red;
        color: #fff;
        &:disabled {
          background-color: $gray;
        }
      }
      &_empty {
        background-color: #fff;
        color: $red;
        &:disabled {
          color: $gray;
          fill: $gray;
        }
      }
      &_icon {
        background-color: transparent;
        border: none;
        .svg-icon {
          transition: all .3s ease;
        }
        &:hover {
          background-color: transparent;
          .svg-icon {
            fill: $red-hover;
          }
        }
        &:focus {
          background-color: transparent;
          .svg-icon {
            fill: $red-focus;
          }
        }
      }
      &_flat {
        background-color: transparent;
        border: none;
        &:hover {
          background-color: transparent;
          color: $red-hover;
        }
        &:focus {
          background-color: transparent;
          color: $red-focus;
        }
      }
    }
    &_lower-cased {
      text-transform: lowercase;
    }
  }
</style>
