<template>
  <div class="page container">
    <div class="center">
      <div class="box">
        <h1 class="box__title">Добро пожаловать!</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <router-link :to="{name: 'Login'}" class="btn">Войти</router-link>
        <router-link :to="{name: 'Addition'}" class="btn">Сложение чисел</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="scss">
  .page {
    background: $gradient;
  }

  .center {
    height: 100%;
    flex-direction: column;
  }

  .box {
    width: 400px;
    max-width: 100%;
    text-align: center;
    &__title {
      margin: 0 0 10px;
      font-weight: 300;
    }
  }

  .btn {
    display: block;
    margin-top: 30px;
  }
</style>
