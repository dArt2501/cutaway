<template>
  <div class="projects-page-wrapper">
    <div class="projects-page">
      <h1 class="projects__title">Мои проекты:</h1>
    </div>
  </div>
</template>

<script setup>

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
      margin: 100px 0;
    }
  }
}
</style>