<template>
  <div class="">
    <Sidebar></Sidebar>
    <div class="box main">
      <div class="steps">
        <div class="steps__body" :class="isSlidingToPrevious? 'sliding-to-prev':''">

          <Step :show="currStep === 0">
            <template slot="title">Шаг 1. Ввод данных.</template>
            <template slot="descr">
              Введите положительные целые числа для расчета суммы.<br>
              Для добавления числа нажмите на кнопку
              "Добавить".
            </template>
            <NumberInput/>
          </Step>

          <Step :show="currStep === 1">
            <template slot="title">Шаг 2. Проверка.</template>
            <template slot="descr">
              Проверьте введенные данные.<br>
            </template>
            <NumberCheck/>
          </Step>

          <Step :show="currStep === 2">
            <template slot="title">Шаг 3. Расчет.</template>
            <NumberCalculation/>
          </Step>

          <Step :show="currStep === 3">
            <template slot="title">Шаг 4. Результат.</template>
            <NumberResult/>
          </Step>

        </div>

        <div class="steps__footer">
          <button type="button" class="btn f-l" v-if="currStep !== 0" @click="goPrevStep">{{backBtnText}}</button>
          <button type="button" class="btn f-r" v-if="currStep !== stepsCount - 1" @click="goNextStep">Продолжить
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Step from '@/components/steps/Step'
import NumberInput from '@/components/steps/NumberInput'
import NumberCheck from '@/components/steps/NumberCheck'
import NumberCalculation from '@/components/steps/NumberCalculation'
import NumberResult from '@/components/steps/NumberResult'

export default {
  name: 'AdditionOperation',
  data () {
    return {
      currStep: 0,
      stepsCount: 4,
      isSlidingToPrevious: false,
      steps: [
        {}
      ]
    }
  },
  computed: {
    backBtnText () {
      return this.currStep === this.stepsCount - 1 ? 'Вернуться к вводу данных' : 'Назад'
    }
  },
  components: {
    Sidebar,
    Step,
    NumberInput,
    NumberCheck,
    NumberCalculation,
    NumberResult
  },
  methods: {
    goPrevStep () {
      this.isSlidingToPrevious = true
      if (this.currStep === this.stepsCount - 1) {
        this.currStep = 0
      } else {
        this.currStep--
      }
    },
    goNextStep () {
      this.isSlidingToPrevious = false
      this.currStep++
    },
    goToStep (stepIndex) {
      this.currStep = stepIndex
    }
  }
}
</script>

<style scoped lang="scss">
  .box {
    width: 50%;
  }

  .main {
    margin-left: 50%;
    min-height: 100vh;
  }

  .steps {
    padding: 80px 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow-x: hidden;
    &__body {
      flex: 1;
      margin-bottom: 60px;
      white-space: nowrap;
    }
  }

  .step {
    display: inline-block;
    width: 100%;
    white-space: normal;
    &__body {
      flex: 1;
    }
    &__title {
      font-size: 2.7em;
      margin-bottom: 1em;
    }
    &__descr {
      font-size: 1.3em;
      margin-bottom: 2em;
      text-align: center;
    }
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    flex: 1;
  }

  .slide-leave-active {
    transition: 0.2s;
  }

  .slide-enter-active {
    transition: 0.5s;
  }

  .slide-enter {
    transform: translate(50%, 0);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  .sliding-to-prev {
    .slide-enter {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    .slide-leave-to {
      transform: translate(50%, 0);
      opacity: 0;
    }
  }

  .f-l {
    float: left;
  }

  .f-r {
    float: right;
  }

  @media all and (max-width: 790px) {
    .main {
      width: 100%;
      padding: 0;
      margin-left: 0;
    }
  }
</style>
