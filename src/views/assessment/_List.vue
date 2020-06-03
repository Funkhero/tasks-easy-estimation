<template>
  <div class="assessments">
    <ul class="assessments__list">
      <li class="assessments__item assessment-item">
        <router-link
          tag="div"
          to="/"
          class="assessments__link"
        >
          <div class="assessment-item__name">Спринт 1</div>
          <div class="assessment-item__time">00.00.00</div>
          <div class="assessment-item__date">01.01.2020</div>
          <div class="assessment-item__crud">удалить</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AssessmentsList',
};
</script>

<style lang="scss" scoped>
</style>
