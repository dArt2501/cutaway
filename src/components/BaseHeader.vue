<template>
  <div class="base-header">
    <RouterLink to="/" class="header__link">Обо мне</RouterLink>
    <RouterLink to="/" class="header__link">Мои проекты</RouterLink>
    <RouterLink to="/" class="header__link">Контакты</RouterLink>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.base-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 50px;
  border-bottom: 1px solid #000;
  border-radius: 10px;

  .header__link {
    position: relative;
    text-transform: uppercase;

    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
      }
    }
  }
}
</style>