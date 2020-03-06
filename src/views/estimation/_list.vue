<template>
  <div class="estimations">
    <h2 class="estimations__title">Sprints estimations list</h2>
    <table class="estimations__table">
      <thead>
        <tr>
          <th>Sprint name</th>
          <th>Estimate time</th>
          <th>Estimate date</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in estimationsList"
          :key="item.id"
        >
          <td class="estimation-item__name">{{ item.name }}</td>
          <td class="estimation-item__time">{{ item.time }}</td>
          <td class="estimation-item__date">{{ item.date }}</td>
          <td class="estimation-item__crud">
            <t-link
              :url="`estimation/result/${item.id}`"
              class="estimations__logo-link"
            >
              <t-icon
                name="eye"
                class="estimation-item__icon"
              />
            </t-link>
            <t-icon
              name="cancel"
              class="estimation-item__icon"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EstimationsList',
  data() {
    return {
      estimationsList: [
        {
          id: 1,
          name: 'Sprint 18.10',
          time: '01.15.34',
          date: '14.10.2021',
        },
        {
          id: 2,
          name: 'Sprint 08.10',
          time: '02.10.14',
          date: '01.10.2021',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .estimations {
    &__title {
      font-size: 32px;
      margin-top: 20px;
      margin-bottom: 40px;
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
    .estimation-item {
      &__crud {
        max-width: 140px;
      }
      &__icon {
        display: inline-block;
        max-width: 26px;
      }
    }
  }
</style>
