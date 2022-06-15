<template>
  <div class="estimation-board">
    <ul class="estimation-board__tasks-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        class="estimation-board__tasks-item"
        :class="{ 'estimation-board__tasks-item_active': task.id === currentTask.id }"
        @click="selectTask(task.id)"
        v-text="index + 1"
      />
    </ul>
    <div class="estimation-board__task-info">
      <t-title
        size="2"
        class="task-info__title"
      >
        <t-link
          native
          target="_blank"
          :url="currentTask.url"
        >
          {{ currentTask.title }}
        </t-link>
      </t-title>
      <div class="task-info__average">
        <span class="task-info__average-text">Average value: {{ averageValue }}</span>
      </div>
      <div class="task-info__voted-persons">
        <participants-list
          shortcut
          :participants="votedPersons"
        />
      </div>
      <vote-block
        class="task-info__voting-block"
        @vote="sendVoteResult"
      />
    </div>
  </div>
</template>

<script>
import VoteBlock from '@/components/estimation/vote-block';
import ParticipantsList from '@/components/estimation/participants-list';

export default {
  name: 'EstimationBoard',
  components: {
    VoteBlock,
    ParticipantsList,
  },
  data() {
    return {
      currentTaskId: 1,
      votedPersons: [
        {
          id: 124,
          name: 'Peter',
          role: 'Developer',
          status: 'offline',
          avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I4duwEh1249AtxMie6leKvSVwU2CUz7ff-pC1Qu=s64-c-mo',
        },
      ],
      averageValue: 0,
      tasks: [
        {
          id: 1,
          title: 'Very hard task',
          url: '/',
        },
        {
          id: 2,
          title: 'Easy task',
          url: '/',
        },
      ],
    };
  },
  computed: {
    currentTask() {
      return this.tasks.find((task) => task.id === this.currentTaskId) || this.tasks[0];
    },
  },
  methods: {
    selectTask(id) {
      this.currentTaskId = id;
    },
    sendVoteResult(result) {
      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped>
  .estimation-board {
    &__tasks-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: 1px solid $gray-light;
      width: max-content;
      margin-bottom: 24px;
    }
    &__tasks-item {
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      font-size: 24px;
      border-right: 1px solid $gray-light;
      cursor: pointer;
      transition: all .2s ease-in-out;
      &_active,
      &:hover {
        color: white;
        background-color: $red;
      }
      &:last-of-type {
        border: none;
      }
    }
    &__task-info {
      padding: 12px;
      border: 1px solid $gray-light;
    }
  }

  .task-info {
    &__title {
      margin-bottom: 24px;
    }
    &__average {
      margin-bottom: 24px;
    }
    &__average-text {
      font-size: 18px;
    }
  }
</style>
