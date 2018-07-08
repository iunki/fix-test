import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru'

const dictionary = {
  ru: {
    attributes: {
      login: 'логин',
      password: 'пароль'
    }
  }
}

Validator.localize(dictionary)
Validator.localize('ru', ru)

Vue.use(VeeValidate)
