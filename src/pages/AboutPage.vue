<template>
  <div class="about-page">
    <h1 class="about__title">Обо мне</h1>
    <p class="about__description">Всем привет, меня зовут Артем. Мне 14 лет, занимаюсь web-разработкой 2 года.</p>
    <div class="about__stack">
      <h2>Мой стек:</h2>
      <p class="stack__items">HTML, CSS, JS, Vue/Nuxt, Vuex/Pinia, REST/SOAP, Pug/Twig, Nginx/Apache, Git, Webpack/Vite, поднимал образ с Docker, был опыт написания кода на React, Angular, Express/Nest, знаком с Linux Ubuntu</p>
    </div>
  </div>
</template>

<script setup>

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