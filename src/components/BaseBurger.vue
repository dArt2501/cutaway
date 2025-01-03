<template>
  <div class="base-burger">
    <button class="burger__button" @click="openDropdown">
      <FontAwesomeIcon :icon="faBars" />
    </button>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import store from '../store/index';

function openDropdown() {
  store.commit('openDropdown')
}
</script>

<style lang="scss" scoped>
.base-burger {
  display: none;
  color: #fff;
  font-size: 30px;

  @media (max-width: 600px) {
    display: flex;
  }

  .burger__button {
    background: none;
    border: none;
    color: #fff;
    height: 30px;
    width: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>