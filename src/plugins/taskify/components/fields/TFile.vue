<template>
  <div
    :class="inputClasses"
    class="t-file form-input"
  >
    <div
      class="t-file__container"
      @dragenter.capture="dragEnter"
      @dragleave.self="dragLeave"
    >
      <input
        type="file"
        class="t-file__input"
        :accept="acceptedTypes"
        :multiple="multiple"
        :disabled="disabled"
        @input="onInput"
      >
      <div class="t-file__emitter">Upload file</div>
      <div class="t-file__drop-zone">
        <t-icon
          name="camera"
          class="t-file__camera-icon"
        />
      </div>
    </div>
    <ul
      v-if="uploadedFiles.length"
      class="t-file__files"
    >
      <li
        v-for="(file, i) in uploadedFiles"
        :key="i"
        class="t-file-item"
      >
        <div
          class="t-file-item__preview"
          :class="{ 't-file-item__preview_error' : file.error }"
        >
          <img
            v-if="file.url && isPictureFile(file)"
            :src="file.url"
            alt="preview"
            class="t-file-item__pick"
          >
          <div
            v-else
            class="t-file-item__doc"
          >
            <t-icon
              :name="file.error ? 'sad' : 'file'"
              class="t-file-item__icon"
            />
            <div
              class="t-file-item__name"
              :title="file.error || file.name"
            >
              {{ file.name }}
            </div>
          </div>
        </div>
        <div
          class="t-file-item__delete"
          @click="deleteFile(i)"
        >
          <t-icon
            name="cross"
            class="t-file-item__delete-icon"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { uploadFiles } from '@/services';

export default {
  name: 'TField',
  props: {
    value: {
      type: [String, Number, Array],
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
      dragActive: false,
      uploadedFiles: [
        {
          url: 'https://image.shutterstock.com/image-vector/mobile-app-development-design-sketch-600w-1139124146.jpg',
          name: 'my dock',
          extension: 'pdf',
        },
        {
          url: 'https://image.shutterstock.com/image-vector/mobile-app-development-design-sketch-600w-1139124146.jpg',
          name: 'design sketch',
          extension: 'jpg',
        },
        {
          url: 'https://image.shutterstock.com/image-vector/mobile-app-development-design-sketch-600w-1139124146.jpg',
          name: 'design-sketch',
          extension: '',
          error: 'file size is too large ( > 5mb )',
        },
      ],
    };
  },
  computed: {
    inputClasses() {
      return {
        't-file_error': this.error,
        't-file_drug-active': this.dragActive,
      };
    },
    acceptedTypes() {
      return (this.accept ? `.${this.accept.join(',.')}` : '').toLowerCase();
    },
  },
  methods: {
    isPictureFile({ extension }) {
      return ['jpg', 'png', 'svg'].includes(extension);
    },
    validateFiles(files) {
      if ((this.uploadedFiles.length + files.length) >= this.maxFileCount) {
        throw new Error(`Max files count - ${this.maxFileCount}`);
      }
      if (files.find((item) => item.size > this.maxFileSize * 1024 * 1024)) {
        throw new Error(`Max file size - ${this.maxFileCount}`);
      }
    },
    async onInput({ target }) {
      const targetFiles = Array.from(target?.files || []);

      this.validateFiles(targetFiles);

      if (targetFiles.length && !this.disabled) {
        await this.addFiles(targetFiles);
      }
    },
    async addFiles(files) {
      const uploadedFiles = await uploadFiles(files);

      if (uploadedFiles?.length) {
        this.uploadedFiles = this.uploadedFiles.concat(uploadedFiles);
      }
    },
    deleteFile(index) {
      this.$emit('delete-file', this.uploadedFiles[index]);
      this.uploadedFiles.splice(index, 1);
    },
    dragEnter() {
      this.dragActive = true;
    },
    dragLeave() {
      this.dragActive = false;
    },
  },
};
</script>

<style lang="scss">
  .t-file {
    margin-bottom: 12px;
    height: auto;
    min-height: 40px;
    padding-bottom: 10px;
    &_drug-active {
      .t-file {
        &__drop-zone {
          border: 1px dashed $yellow;
        }
        &__camera-icon {
          fill: $yellow;
        }
      }
    }
    &__input {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }
    &__container {
      position: relative;
      &:hover {
        .t-file {
          &__drop-zone {
            border: 1px dashed $gray;
          }
          &__camera-icon {
            fill: $gray;
          }
        }
      }
    }
    &__emitter {
      padding: 12px 0;
      color: $gray;
      text-align: center;
    }
    &__drop-zone {
      border: 1px dashed $gray-super-light;
      border-radius: 6px;
      background-color: white;
      height: 40px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border .3s ease-in-out;
    }
    &__camera-icon {
      width: 35px;
      height: 25px;
      fill: $gray-super-light;
      transition: fill .3s ease-in-out;
    }
    &__files {
      display: flex;
      padding: 12px 0;
      overflow: auto;
    }
  }

  .t-file-item {
    position: relative;
    margin-right: 12px;
    &:last-of-type {
      margin-right: 0;
    }
    &__preview {
      width: 80px;
      height: 80px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid $gray;
      border-radius: 6px;
      &_error {
        border: 1px solid $red;
        .t-file-item {
          &__icon {
            fill: $red;
          }
          &__name {
            color: $red;
          }
        }
      }
    }
    &__pick {
      height: 100%;
    }
    &__icon {
      width: 28px;
      height: 28px;
    }
    &__doc {
      width: 80px;
      text-align: center;
      padding: 0 8px;
    }
    &__delete {
      position: absolute;
      top: -5px;
      right: -5px;
      cursor: pointer;
    }
    &__delete-icon {
      width: 14px;
      height: 14px;
    }
    &__name {
      font-size: 12px;
      margin-top: 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 64px;
    }
  }
</style>
