<template>
  <div class="estimation-creation">
    <t-form
      class="estimation-creation__form"
      @submit="onSubmit"
    >
      <t-field
        v-for="(field, key) in formFields"
        :key="key"
        v-model="field.value"
        v-bind="field.props"
        :errors="field.errors"
        :disabled="loading"
        class="estimation-creation__field"
        @blur="validateField(key)"
        @search="searchParticipants"
      />
      <t-button
        type="submit"
        class="estimation-creation__button"
      >
        Create
      </t-button>
    </t-form>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  validate,
  required,
  length,
} from '@/utilities/validation';

export default {
  name: 'EstimationCreation',
  data() {
    return {
      loading: false,
      formFields: {
        name: {
          props: {
            type: 'text',
            label: 'Estimation name',
            placeholder: 'My first sprint',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value) => validate([required, length(2, 30)], value),
        },
        participants: {
          props: {
            type: 'select',
            label: 'Participants',
            placeholder: 'Search for participants',
            required: true,
            multiple: true,
            searchOutside: true,
            options: [],
          },
          value: [],
          errors: false,
          validate: (value) => validate([required], value),
        },
        tasks: {
          props: {
            type: 'file',
            label: 'Tasks for estimate',
            required: true,
            multiple: true,
            accept: ['docx', 'doc', 'pdf'],
          },
          value: null,
          errors: false,
          validate: (value) => validate([required], value),
        },
      },
    };
  },
  methods: {
    searchParticipants(value) {
      console.log('searching... ', value);
    },
    onSubmit() {
      const result = {
        id: 123,
      };
      this.$router.push(`/estimation/conversation/${result.id}`);
    },
    validateField(key) {
      const validateResult = this.formFields[key].validate(this.formFields[key].value);
      Vue.set(this.formFields[key], 'errors', validateResult);
    },
  },
};
</script>

<style lang="scss" scoped>
  .estimation-creation {
    position: relative;
  }
</style>
