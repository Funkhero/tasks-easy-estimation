<template>
  <div
    :class="inputClasses"
    class="t-file"
  >
    <input
      type="file"
      class="form-input t-file__input"
      :accept="acceptedTypes"
      :multiple="multiple"
      :disabled="disabled"
      @input="onInput"
    >
    <div class="t-file__container">
      <div
        class="t-file__emitter"
        @click="uploadFile"
      >
        Upload file
      </div>
      <div class="t-file__drop-zone"/>
      <ul
        v-if="selectedFiles.length"
        class="t-file__files"
      >
        <li
          v-for="(file, i) in selectedFiles"
          :key="i"
          class="t-file__item"
        >
          <div class="t-file-item__preview">
            <t-icon
              v-if="file.error"
              name="sad"
              class="t-file-item__icon"
            />
            <img
              v-else-if="file.preview"
              :src="file.preview"
              alt="preview"
              class="t-file-item__pick"
            >
            <t-icon
              v-else
              name="file"
              class="t-file-item__icon"
            />
          </div>
          <div class="t-file-item__name">file.name</div>
          <t-icon
            name="cross"
            class="t-file-item__delete-icon"
            @click="deleteFile(i)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TField',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    accept: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    maxFileSize: {
      type: Number,
      default: 5,
    },
    maxFileCount: {
      type: Number,
      default: Infinity,
    },
    preview: {
      type: Boolean,
      default: false,
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
      isFocus: false,
      isFresh: false,
      isFreshTimeout: null,
      selectedFiles: [],
    };
  },
  computed: {
    inputClasses() {
      const result = {
        'has-error': this.error,
      };

      return result;
    },
    acceptedTypes() {
      return (this.accept ? `.${this.accept.join(',.')}` : '').toLowerCase();
    },
  },
  methods: {
    onInput({ target }) {
      const { value } = target;

      if (value === '' && this.value !== null) this.$emit('input', null);
      else if (value !== this.value) this.$emit('input', value);

      if (target.value !== value) target.value = value;
    },
    uploadFile() {

    },
    deleteFile(index) {
      this.selectedFiles.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
  .t-text {
    position: relative;
    margin-bottom: 12px;
  }
</style>
