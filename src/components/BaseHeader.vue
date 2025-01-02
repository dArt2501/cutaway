<template>
  <div class="base-header">
    <RouterLink to="/" class="header__link">Главная</RouterLink>
    <RouterLink to="/about" class="header__link">Обо мне</RouterLink>
    <RouterLink to="/projects" class="header__link">Мои проекты</RouterLink>
    <div class="header__contacts-wrapper">
      <p class="header__link" @click="openDropdown">Контакты</p>
      <BaseDropdown v-if="store.state.isDropdownOpen"/>
    </div>
  </div>
</template>

<script setup>
import BaseDropdown from './BaseDropdown.vue';
import store from '../store/index';

function openDropdown() {
  store.commit('openDropdown')
}
</script>

<style lang="scss" scoped>
.base-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  border-bottom: 1px solid #fff;
  border-radius: 10px;

  .header__link {
    cursor: pointer;
    position: relative;
    text-transform: uppercase;

    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
      }
    }
  }

  .header__contacts-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
</style>