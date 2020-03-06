<template>
  <div class="participant-item">
    <div class="participant-item__avatar">
      <img
        :src="participant.avatar"
        alt="avatar"
        class="participant-item__img"
      >
    </div>
    <div class="participant-item__info">
      <div class="participant-item__name">{{ participant.name }}</div>
      <div class="participant-item__role">{{ participant.role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticipantItem',
  props: {
    participant: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .participant-item {
    max-width: 160px;
    padding: 12px;
    display: flex;
    align-items: center;
    &__avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 8px;
      background-color: $yellow;
      overflow: hidden;
    }
    &__img {
      width: 100%;
    }
    &__name {
      font-size: 14px;
      margin-bottom: 4px;
      font-weight: 600;
    }
  }
</style>
