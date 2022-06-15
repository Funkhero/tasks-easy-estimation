<template>
  <div class="participant-item">
    <div class="participant-item__avatar">
      <span
        v-if="!shortcut"
        class="participant-item__status"
        :class="`participant-item__status_${participant.status}`"
      />
      <div class="participant-item__avatar-wrap">
        <img
          :src="participant.avatar"
          alt="avatar"
          class="participant-item__img"
        >
      </div>
    </div>
    <div
      v-if="!shortcut"
      class="participant-item__info"
    >
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
    shortcut: {
      type: Boolean,
      default: false,
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
      margin-right: 8px;
      position: relative;
    }
    &__avatar-wrap {
      overflow: hidden;
      border-radius: 50%;
      background-color: $yellow;
    }
    &__status {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &_online {
        background-color: $green;
      }
      &_offline {
        background-color: $red;
      }
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
