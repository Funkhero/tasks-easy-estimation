<template>
  <div class="estimation-conversation">
    <t-title
      size="2"
      class="estimation-conversation__title"
    >
      {{ conversationInfo.title }}
    </t-title>
    <ul class="estimation-conversation__info-list">
      <li class="estimation-conversation__info-item">
        <span>Estimate time:</span>
        {{ conversationInfo.estimateTime }}
      </li>
      <li class="estimation-conversation__info-item">
        <span>Estimate date:</span>
        {{ conversationInfo.estimateDate }}
      </li>
    </ul>
    <participants-list
      v-if="conversationInfo.participants"
      :participants="conversationInfo.participants"
    />
    <estimation-board
      class="estimation-conversation__board"
      :tasks="conversationInfo.tasks"
    />
    <div class="estimation-conversation__controls">
      <t-button class="estimation-conversation__save">
        Save results
      </t-button>
      <t-button
        class="estimation-conversation__cancel"
        view="empty"
      >
        Cancel conversation
      </t-button>
    </div>
  </div>
</template>

<script>
import EstimationBoard from '@/components/estimation/board';
import ParticipantsList from '@/components/estimation/participants-list';

export default {
  name: 'AssessmentConversation',
  components: {
    ParticipantsList,
    EstimationBoard,
  },
  routePath: ':id',
  data() {
    return {
      conversationInfo: {
        title: 'Sprint 18.10',
        estimateTime: '01.15.34',
        estimateDate: '14.10.2021',
        participants: [
          {
            id: 123,
            name: 'Evgeny',
            role: 'Admin',
            status: 'online',
            avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I4duwEh1249AtxMie6leKvSVwU2CUz7ff-pC1Qu=s64-c-mo',
          },
          {
            id: 124,
            name: 'Peter',
            role: 'Developer',
            status: 'offline',
            avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I4duwEh1249AtxMie6leKvSVwU2CUz7ff-pC1Qu=s64-c-mo',
          },
        ],
        tasks: [
          {
            id: 234,
            name: 'Add new useful component',
            url: '/',
            time: null,
            points: null,
            estimations: null,
          },
          {
            id: 235,
            name: 'Add new useful component',
            url: '/',
            time: null,
            points: null,
            estimations: null,
          },
          {
            id: 236,
            name: 'Add new useful component',
            url: '/',
            time: null,
            points: null,
            estimations: null,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .estimation-conversation {
    &__title {
      margin: 24px 0;
    }
    &__info-list {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__info-item {
      margin-right: 12px;
      font-size: 16px;
      &:last-of-type {
        margin-right: 0;
      }
      span {
        font-weight: 600;
      }
    }
    &__board {
      margin-bottom: 24px;
    }
    &__save {
      margin-right: 8px;
    }
  }
</style>
