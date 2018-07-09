<template>
  <transition name="slide">
    <div class="step" v-if="show">
      <div class="step__title">
        <slot name="title"></slot>
      </div>
      <div class="step__descr text-center">
        <slot name="descr"></slot>
      </div>
      <div class="step__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Step',
  props: ['show']
}
</script>

<style scoped lang="scss">
  .step {
    display: inline-block;
    width: 100%;
    white-space: normal;
    &__content {
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

  @media all and (max-width: 790px) {
    .step {
      padding: 30px 15px;
    }
  }

</style>
