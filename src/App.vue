<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "normalize.css";

  * {
    box-sizing: border-box;
  }

  body {
    /*font-family: 'Open Sans', sans-serif;*/
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #232323;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  .page {
    height: 100vh;
    min-height: 100vh;
    &_bg {
      background: $gradient;
    }
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .form {
    &__group {
      margin-bottom: 1.7em;
    }
    &__label {
      display: block;
      margin-bottom: 10px;
    }
    &__control {
      display: block;
      padding: 15px;
      border: 1px solid $light;
      box-shadow: none;
      width: 100%;
      &:focus {
        outline: none;
        border-color: darken($light, 20%);
      }
    }
    &__error {
      font-size: .7em;
    }
  }

  .btn {
    cursor: pointer;
    box-shadow: none;
    padding: 15px 30px;
    font-weight: inherit;
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
    background-color: $light;
    border: none;
    &:hover {
      background-color: darken($light, 5%);
    }
    &_block {
      width: 100%;
      display: block;
    }
    &_primary {
      background-color: $primary;
      color: #fff;
      &:hover {
        background-color: darken($primary, 5%);
      }
    }
    &:disabled {
      pointer-events: none;
      background-color: #bcbcbc;
    }
    &:focus, &:active {
      outline: none;
    }
  }

  .box {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
</style>
