<template>
  <div class="base-header">
    <RouterLink :to="item.link" class="header__link" v-for="item in Header.header" :key="item.link">{{ item.title }}</RouterLink>
    <div class="header__contacts-wrapper">
      <p class="header__link" @mouseenter="openDropdown">Контакты</p>
      <BaseDropdown v-if="store.state.isDropdownOpen"/>
    </div>
    <BaseBurger/>
  </div>
</template>

<script setup>
import BaseDropdown from './BaseDropdown.vue';
import BaseBurger from './BaseBurger.vue';
import store from '../store/index';
import Header from "../../server/Header";

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
  box-shadow: 1px 1px 10px 1px #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 600px) {
    justify-content: flex-start;
    box-shadow: none;
    padding: 20px;
  }

  .header__link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    height: 25px;

    @media (max-width: 600px) {
      display: none;
    }

    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
      }
    }

    &:last-of-type {
      @media(hover: hover) {
        &:hover {
          text-decoration: none;
        }
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