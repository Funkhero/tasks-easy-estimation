<script>
export default {
  name: 'TTitle',
  props: {
    size: {
      type: String,
      default: '1',
      validator(value) {
        return ['1', '2', '3', '4'].includes(value);
      },
    },
  },
  render(createElement) {
    return createElement(
      `h${this.size}`,
      {
        class: [
          't-title',
          `t-title_size_${this.size}`,
        ],
      },
      this.$slots.default,
    );
  },
};
</script>

<style lang="scss" scoped>
  .t-title {
    line-height: 1.2;
    &_size {
      &_1 {
        font-size: 36px;
        text-transform: uppercase;
        font-weight: 700;
      }
      &_2 {
        font-size: 28px;
        font-weight: 600;
      }
      &_3 {
        font-size: 18px;
        font-weight: 500;
      }
      &_4 {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
</style>
