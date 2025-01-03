<template>
  <div class="base-dropdown" @mouseleave="closeDropdown">
    <a :href="link.link" target="_blank" class="dropdown__items" @click="closeDropdown" v-for="link in HeaderDropdown.headerDropdown" :key="link.link">{{ link.title }}</a>
  </div>
  <div class="base-dropdown-mobile" v-click-outside="closeDropdown">
    <a :href="link.link" target="_blank" class="dropdown__items" @click="closeDropdown" v-for="link in HeaderDropdown.headerDropdown" :key="link.link">{{ link.title }}</a>
  </div>
</template>

<script setup>
import store from '../store/index';
import HeaderDropdown from '../../server/HeaderDropdown';

function closeDropdown() {
  store.commit('closeDropdown');
}
</script>

<style lang="scss" scoped>
.base-dropdown {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: auto;
  background: #000;
  top: 25px;
  border: 1px solid #fff;
  border-top: none;
  border-radius: 5px;
  overflow: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  @media (max-width: 600px) {
    display: none;
  }

  .dropdown__items {
    font-size: 13px;
    padding: 8px;
    transition: .3s;

    @media(hover: hover) {
      &:hover {
        color: #000;
        background: #fff;
        transition: .3s;
      }
    }
  }
}

.base-dropdown-mobile {
  display: none;

  @media (max-width: 600px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: auto;
    background: #000;
    top: 20px;
    border: 1px solid #fff;
    border-top: none;
    border-radius: 5px;
    overflow: hidden;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .dropdown__items {
    font-size: 13px;
    padding: 8px;
    transition: .3s;

    @media(hover: hover) {
      &:hover {
        color: #000;
        background: #fff;
        transition: .3s;
      }
    }
  }
}
</style>