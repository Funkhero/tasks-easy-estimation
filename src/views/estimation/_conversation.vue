<template>
  <div class="estimation-conversation">
    <h2 class="estimation-conversation__title">{{ conversationInfo.title }}</h2>
    <participants-list
      v-if="conversationInfo.participants"
      :participants="conversationInfo.participants"
    />
    <estimation-board
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
  routePath: ':id',
  components: {
    ParticipantsList,
    EstimationBoard,
  },
  data() {
    return {
      conversationInfo: {
        title: 'Sprint 18.10',
        participants: [
          {
            id: 123,
            name: 'Evgeny',
            role: 'Admin',
            avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I4duwEh1249AtxMie6leKvSVwU2CUz7ff-pC1Qu=s64-c-mo',
          },
          {
            id: 124,
            name: 'Peter',
            role: 'Developer',
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
    position: relative;
  }
</style>
