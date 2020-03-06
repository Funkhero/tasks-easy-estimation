<template>
  <div class="estimation-result">
    <h2 class="estimation-result__title">{{ resultInfo.title }}</h2>
    <ul class="estimation-result__info-list">
      <li class="estimation-result__info-item">
        <span>Estimate time:</span>
        {{ resultInfo.estimateTime }}
      </li>
      <li class="estimation-result__info-item">
        <span>Estimate date:</span>
        {{ resultInfo.estimateDate }}
      </li>
    </ul>
    <h3 class="estimation-result__subtitle">Participants</h3>
    <ul class="estimation-result__participants-list">
      <li
        v-for="participant in resultInfo.participants"
        :key="participant.id"
        class="estimation-result__participant"
      >
        <participant-item
          :key="participant.id"
          :participant="participant"
        />
      </li>
    </ul>
    <h3 class="estimation-result__subtitle">Assessment results</h3>
    <table class="estimation-result__table">
      <thead>
        <tr>
          <th>Task name</th>
          <th>Estimate time</th>
          <th>Hours / Story points</th>
          <th>Estimations</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in resultInfo.tasks"
          :key="task.id"
        >
          <td class="estimation-item__name">
            <t-link
              :url="task.url"
              native
              target="_blank"
            >
              {{ task.name }}
            </t-link>
          </td>
          <td class="estimation-item__time">{{ task.time }}</td>
          <td class="estimation-item__points">{{ task.points }}</td>
          <td class="estimation-item__estimations">{{ task.estimations }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ParticipantItem from '@/components/estimation/participant-item';

export default {
  name: 'AssessmentResult',
  components: {
    ParticipantItem,
  },
  routePath: ':id',
  data() {
    return {
      resultInfo: {
        id: 1,
        title: 'Sprint 18.10',
        estimateTime: '01.15.34',
        estimateDate: '14.10.2021',
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
            time: '00.15.34',
            points: 16,
            estimations: 5,
          },
          {
            id: 235,
            name: 'Add new useful component',
            url: '/',
            time: '00.15.34',
            points: 16,
            estimations: 5,
          },
          {
            id: 236,
            name: 'Add new useful component',
            url: '/',
            time: '00.15.34',
            points: 16,
            estimations: 5,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .estimation-result {
    &__title {
      margin: 24px 0;
      font-size: 32px;
      font-weight: 600;
    }
    &__subtitle {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
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
    &__participants-list {
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
    &__table {
      width: 100%;
      border: 1px solid $gray;
      thead {
        th {
          border: 1px solid $gray;
          font-size: 18px;
          padding: 8px;
        }
      }
      tbody {
        td {
          text-align: center;
          border: 1px solid $gray;
          padding: 8px;
          font-size: 14px;
        }
      }
    }
  }
</style>
