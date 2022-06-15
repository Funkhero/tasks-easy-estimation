<template>
  <div class="vote-block">
    <ul class="vote-block__list">
      <li
        v-for="(item, index) in voteValues"
        :key="`${index}-${item}`"
        class="vote-block__item"
        :class="{ 'vote-block__item_active': item === currentValue }"
        @click="selectValue(item)"
      >
        <span class="vote-block__text">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VoteBlock',
  props: {
    voteValues: {
      type: Array,
      default: () => [1, 2, 3, 5, 8, 13, 21],
    },
    value: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selectedValue: null,
    };
  },
  computed: {
    currentValue() {
      return this.value || this.selectedValue;
    },
  },
  methods: {
    selectValue(value) {
      this.selectedValue = value;
      this.$emit('vote', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .vote-block {
    &__list {
      display: flex;
      align-items: center;
    }
    &__item {
      padding: 12px 24px;
      margin-right: 8px;
      border: 1px solid $gray-light;
      border-radius: 8px;
      cursor: pointer;
      transition: all .2s ease-in-out;
      &_active,
      &:hover {
        color: white;
        background-color: $red;
      }
    }
  }
</style>
