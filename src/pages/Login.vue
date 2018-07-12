<template>
  <div class="page page_bg container">
    <div class="center">
      <div class="box">
        <form class="form" @submit.prevent="login">
          <div class="form__group form__error" v-show="authError">
            {{authError}}
          </div>
          <div class="form__group">
            <label for="login" class="form__label">Логин</label>
            <input type="text"
                   v-model="user.login"
                   v-validate="'required|email'"
                   name="login" id="login" class="form__control"
                   placeholder="Введите логин" autofocus>
            <p class="form__error" v-show="fields.login && fields.login.touched">{{errors.first('login')}}</p>
          </div>
          <div class="form__group">
            <label for="password" class="form__label">Пароль</label>
            <input type="password"
                   v-model="user.password"
                   v-validate="'required'"
                   name="пароль" id="password" class="form__control"
                   placeholder="Введите пароль">
            <p class="form__error" v-show="fields.password && fields.password.touched">{{errors.first('password')}}</p>
          </div>
          <button type="submit" class="btn btn_block btn_primary" :disabled="isFormDirty">Войти</button>
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
        login: '',
        password: ''
      },
      authError: ''
    }
  },
  computed: {
    isFormDirty () {
      return Object.keys(this.fields).some(key => this.fields[key].invalid)
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          AuthService.login(this.user).then(
            (res) => {
              if (this.$route.query.next) {
                this.$router.push(this.$route.query.next)
              } else {
                this.$router.push('/addition')
              }
            },
            (error) => {
              this.authError = error.message
            }
          )
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .center {
    height: 100%;
  }

  .box {
    width: 400px;
    max-width: 100%;
  }
</style>
