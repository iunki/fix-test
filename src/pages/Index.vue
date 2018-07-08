<template>
    <div class="page container">
      <h1>Добро пожаловать!</h1>
      <router-link :to="{name: 'Login'}" class="btn">Войти</router-link>
      <router-link :to="{name: 'Addition'}" class="btn">Перейти к странице сложения чисел</router-link>
    </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="scss">

</style>
