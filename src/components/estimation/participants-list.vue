<template>
  <div class="participants-list">
    <h3 class="participants-list__title">Participants</h3>
    <ul class="participants-list__list">
      <li
        v-for="participant in participants"
        :key="participant.id"
        class="participants-list__item"
      >
        <participant-item
          :key="participant.id"
          :participant="participant"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ParticipantItem from '@/components/estimation/participant-item';

export default {
  name: 'ParticipantsList',
  components: {
    ParticipantItem,
  },
  props: {
    participants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .participants-list {
    &__title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    &__list {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
    }
    &__participant {
      margin-right: 12px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
