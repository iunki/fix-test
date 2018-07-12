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
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: #292929;
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
    @media all and (max-width: 790px) {
      height: auto;
    }
    &_bg {
      background: $gradient;
    }
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .form {
    &_sm {
      margin: 0 auto;
      width: 480px;
      max-width: 100%;
    }
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
      max-width: 100%;
      &:focus {
        outline: none;
        border-color: darken($light, 20%);
      }
    }
    &__error {
      font-size: .7em;
    }
  }

  .btn, .select {
    cursor: pointer;
    box-shadow: none;
    padding: 15px 40px;
    font-weight: inherit;
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
    background-color: $light;
    border: 1px solid transparent;
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
      &:focus, &:active {
        border: 1px solid darken($primary, 5%);
      }
    }
    &:disabled {
      pointer-events: none;
      background-color: #bcbcbc;
      color: #fff;
    }
    &:focus, &:active {
      outline: none;
      border: 1px solid darken($light, 5%);
    }
  }

  .box {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    text-align: left;
    th {
      font-weight: 600;
      &:first-child {
        width: 50px;
      }
    }
  }
</style>
