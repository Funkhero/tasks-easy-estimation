<template>
  <div
    class="t-field-select"
    v-click-outside="onLeave"
  >
    <div
      class="t-field-select__action-zone form-input"
      @click.stop="emitFocusEvent"
    >
      <ul class="t-field-select__value-list">
        <template v-if="multiple && value && value.length">
          <li
            v-for="(item, index) in value"
            :key="`${item}-${index}`"
            class="t-field-select__value-item"
            @click.stop
          >
            <span class="t-field-select__value-item-text">{{ getOptionNameByValue(item) }}</span>
            <span
              class="t-field-select__value-item-button"
              @click="deleteSelectedOption(item)"
            >
              <t-icon
                name="cross"
                class="t-field-select__value-item-delete"
              />
            </span>
          </li>
        </template>
        <li
          class="t-field-select__value-item t-field-select__value-item_borderless"
          :class="{ 't-field-select__value-item_full-sized': !multiple }"
        >
          <input
            ref="textInput"
            v-model="searchText"
            :disabled="!withSearch"
            type="text"
            name="t-field-select"
            class="t-field-select__input"
            :class="{ 't-field-select__input_full-sized': !multiple }"
          >
        </li>
      </ul>
    </div>
    <div
      v-show="inFocus && options"
      class="t-field-select__dropdown-block"
    >
      <ul
        v-if="filteredOptions && filteredOptions.length"
        class="t-field-select__options-list"
      >
        <li
          v-for="option in filteredOptions"
          :key="option.id"
          class="t-field-select__options-item"
          :class="{ 't-field-select__options-item_selected': option.id === value || (multiple && (value || []).includes(option.id)) }"
          @click="selectOption(option)"
          v-text="option.name"
        />
      </ul>
      <div
        v-else
        class="t-field-select__empty"
      >
        Not found
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utilities';

export default {
  name: 'TSelect',
  props: {
    value: {
      type: [String, Number, Array],
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    withSearch: {
      type: Boolean,
      default: true,
    },
    searchOutside: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: [String, Object],
      default: null,
    },
    options: {
      type: [Array],
      default: () => [],
    },
  },
  data() {
    return {
      searchText: '',
      inFocus: false,
      isFresh: false,
      isFreshTimeout: null,
      debounceEventHandler: null,
    };
  },
  computed: {
    filteredOptions() {
      if (!this.searchOutside && this.searchText?.length) {
        return this.options.filter((option) => {
          return option.name.toLowerCase().includes(this.searchText.toLowerCase());
        });
      }

      return this.options;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(value, oldValue) {
        if (!this.multiple && value !== oldValue) {
          this.searchText = this.options.find((option) => option.id === value)?.name;
        }
      },
    },
    searchText() {
      if (!this.searchOutside) return;

      if (!this.debounceEventHandler) {
        this.debounceEventHandler = debounce(this.emitSearchOutside, 500);
      }

      this.debounceEventHandler();
    },
  },
  methods: {
    onLeave() {
      this.inFocus = false;
      this.$emit('blur');
    },
    emitSearchOutside() {
      this.$emit('search', this.searchText);
    },
    getOptionNameByValue(value) {
      return this.options.find((option) => option.id === value)?.name;
    },
    emitFocusEvent() {
      this.inFocus = true;
      if (this.withSearch) {
        this.$refs.textInput.focus();
      }
    },
    selectOption(option) {
      let value = null;

      if (option) {
        if (this.multiple) {
          this.searchText = '';
          value = (this.value && [...this.value]) || [];
          value.push(option.id);
        } else {
          this.searchText = option.name;
          value = option.id;
          this.inFocus = false;
        }
      }

      this.$emit('input', value);
    },
    deleteSelectedOption(id) {
      const value = this.value.filter((valueId) => valueId !== id);
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
  .t-field-select {
    position: relative;
    margin-bottom: 14px;
    &__action-zone {
      position: relative;
      height: auto;
      min-height: 40px;
      display: flex;
      align-items: center;
      z-index: 2;
    }
    &__value-list {
      display: flex;
      flex-wrap: wrap;
    }
    &__value-item {
      height: 22px;
      padding: 0 0 0 6px;
      border-radius: 6px;
      border: 1px solid $text-light;
      display: flex;
      align-items: center;
      margin: 3px 6px 3px 0;
      &_borderless {
        border: none;
        padding: 0;
      }
      &_full-sized {
        width: 100%;
      }
    }
    &__value-item-text {
      font-size: 12px;
      line-height: 22px;
    }
    &__value-item-button {
      cursor: pointer;
      padding: 0 6px;
    }
    &__value-item-delete {
      width: 8px;
    }
    &__input {
      height: 20px;
      min-width: 30px;
      max-width: 120px;
      border: none;
      outline: none;
      background-color: inherit;
      &_full-sized {
        width: 100%;
        max-width: 100%;
      }
    }
    &__dropdown-block {
      position: absolute;
      top: calc(100% - 10px);
      z-index: 1;
      width: 100%;
      background-color: white;
      border-radius: 6px;
      border: 1px solid $text-light;
      min-height: 70px;
      max-height: 200px;
      padding: 16px 0 6px;
    }
    &__options-list {
      max-height: 178px;
      overflow: auto;
    }
    &__empty {
      padding: 6px;
    }
    &__options-item {
      color: $text;
      padding: 6px;
      cursor: pointer;
      &_selected,
      &:hover {
        background-color: $gray-super-light;
      }
    }
  }
</style>
