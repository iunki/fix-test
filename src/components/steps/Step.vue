<template>
  <div class="step">
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
</template>

<script>
export default {
  name: 'Step',
  props: ['title'],
  created () {
    if (this.title) {
      document.title = this.title
    }
  }
}
</script>

<style scoped lang="scss">
  .step {
    display: inline-block;
    width: 100%;
    height: 100%;
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

  @media all and (max-width: 790px) {
    .step {
      padding: 30px 15px;
    }
  }

</style>
