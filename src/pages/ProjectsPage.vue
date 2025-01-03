<template>
  <div class="projects-page-wrapper">
    <div class="projects-page">
      <h1 class="projects__title">Мои проекты:</h1>
      <ul class="projects__list">
        <li v-for="item in ProjectsPage.projects" :key="item.title">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ProjectsPage from '../../server/ProjectsPage';
</script>

<style lang="scss" scoped>
.projects-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .projects-page {
    width: 100%;
    max-width: 75%;

    .projects__title {
      margin: 100px 0 50px;
    }

    .projects__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>