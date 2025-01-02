<template>
  <div class="base-dropdown">
    <a href="https://t.me/Artem09za" target="_blank" class="dropdown__items" @click="closeDropdown">Telegram</a>
    <a href="mailto:artem1991v120fps@gmail.com" target="_blank" class="dropdown__items" @click="closeDropdown">Почта</a>
  </div>
</template>

<script setup>
import store from '../store/index';

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
  border-radius: 5px;
  overflow: hidden;

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