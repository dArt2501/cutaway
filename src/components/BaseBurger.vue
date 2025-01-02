<template>
  <div class="base-burger">
    <FontAwesomeIcon :icon="faBars" />
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


</script>

<style lang="scss" scoped>
.base-burger {
  display: none;
  color: #fff;
  font-size: 30px;

  @media (max-width: 600px) {
    display: flex;
  }
}
</style>