<template>
  <div class="about-page">
    <h1 class="about__title">Обо мне</h1>
    <p class="about__description">{{ mockAbout.description }}</p>
    <div class="about__stack">
      <h2>Мой стек:</h2>
      <p class="stack__items">{{ mockAbout.stack }}</p>
    </div>
  </div>
</template>

<script setup>
import mockAbout from "../../server/AboutPage.json";
</script>

<style lang="scss" scoped>
.about-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .about__title {
    margin: 100px 0;
  }

  .about__description {
    width: 100%;
    max-width: 60%;
    text-align: center;
  }

  .about__stack {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 60%;
    margin: 100px 0;

    .stack__items {
      list-style-type: none;
      margin: 30px 0;
    }
  }
}
</style>