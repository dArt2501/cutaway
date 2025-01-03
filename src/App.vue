<template>
  <div class="app-wrapper">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
  <BaseAnimate/>

</template>

<script setup>
import Header from './components/BaseHeader.vue';
import Footer from './components/BaseFooter.vue';
import BaseAnimate from './components/BaseAnimate.vue';
</script>

<style>
@font-face {
  font-family: Merriweather-Regular;
  src: url("./assets/fonts/Merriweather-Regular.ttf");
}

@font-face {
  font-family: Merriweather-Bold;
  src: url("./assets/fonts/Merriweather-Bold.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Merriweather-Regular;
}

a {
  color: #000;
  text-decoration: none;
}

input, textarea {
  outline: none;
}

h1, h2, h3, h4, p, a {
  color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #000;
}

.app-wrapper {
  z-index: 1;
}

body {
  overflow-y: auto;
  --scrollbar-background: #f9fbfc;
  --scrollbar-thumb: #000;
}

body::-webkit-scrollbar {
  width: 8px;
  background-color: var(--scrollbar-background);
}

body::-webkit-scrollbar-thumb {
  background-color: #000;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}
</style>