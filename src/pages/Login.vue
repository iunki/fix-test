<template>
  <div class="page page_bg container">
    <div class="center">
      <div class="box">
        <form class="form" @submit.prevent="login">
          <div class="form__group">
            <label for="login" class="form__label">Логин</label>
            <input type="text"
                   v-model="user.email"
                   v-validate="'required|email'"
                   name="login" id="login" class="form__control"
                   placeholder="Введите логин" autofocus>
            <p class="form__error"></p>
          </div>
          <div class="form__group">
            <label for="password" class="form__label">Пароль</label>
            <input type="password" v-model="user.password" name="password" id="password" class="form__control"
                   placeholder="Введите пароль">
          </div>
          <button type="submit" class="btn btn_block btn_primary">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      AuthService.login(this.user).then(
        (res) => {
          console.log(res)
          this.$router.push(this.$route.query.next)
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
  .center {
    height: 100%;
  }
  .box {
    width: 380px;
    max-width: 100%;
  }
</style>
