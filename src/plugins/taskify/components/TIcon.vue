<script>
export default {
  name: 'TIcon',
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
  },
  render(createElement) {
    return createElement(
      'svg',
      {
        class: [
          'svg-icon',
        ],
      },
      [
        createElement('use', {
          attrs: {
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            'xlink:href': `#i-${this.name}`,
          },
        }),
      ],
    );
  },
};
</script>
