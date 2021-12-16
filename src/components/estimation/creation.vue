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
            placeholder: '',
            required: true,
          },
          value: null,
          errors: false,
          validate: (value) => validate(required, value),
        },
        tasks: {
          props: {
            type: 'file',
            label: 'Tasks for estimate',
            required: true,
            accept: ['docx', 'doc', 'pdf'],
          },
          value: null,
          errors: false,
          validate: (value) => validate(required, value),
        },
      },
    };
  },
  methods: {
    onSubmit() {
      const result = {
        id: 123,
      };
      this.$router.push(`/estimation/conversation/${result.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .estimation-creation {
    position: relative;
  }
</style>
