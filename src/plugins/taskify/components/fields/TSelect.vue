<template>
  <div
    :class="fieldClasses"
    class="t-field-select"
  >
    <div class="t-field-select__action-zone form-input">
      <ul
        v-if="multiple && value && value.length"
        class="t-field-select__value-list"
      >
        <li
          v-for="(item, index) in value"
          :key="`${item.id}-${index}`"
          class="t-field-select__value-item"
        >
          <span class="t-field-select__value-item-text">{{ item.name }}</span>
          <t-icon
            name="cross"
            class="t-field-select__value-item-delete"
            @click="deleteSelectedOption(item.id)"
          />
        </li>
      </ul>
      <input
        v-model="search"
        type="text"
        name="t-field-select"
        class="t-field-select__input"
      >
    </div>
    <ul class="t-field-select__options-list">
      <li
        v-for="option in options"
        :key="option.id"
        class="t-field-select__options-item"
        :class="{ 't-field-select__options-item_selected': option.id === value }"
        @click="selectOption(option)"
        v-text="option.name"
      />
    </ul>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      search: '',
      isFocus: false,
      isFresh: false,
      isFreshTimeout: null,
    };
  },
  computed: {
    fieldClasses() {
      const classes = '';
      return classes;
    },
  },
  mounted() {
    this.$el.value = this.value;
  },
  methods: {
    selectOption(option) {
      if (this.multiple) {
        this.search = '';
      } else {
        this.search = option.name;
      }
    },
    deleteSelectedOption() {
      // const optionIndex = this.value.findIndex((option) => option.id === optionId);
      // this.value.splice(optionIndex, 1);
    },
  },
};
</script>

<style lang="scss">
  .t-field-select {
    position: relative;
  }
</style>
