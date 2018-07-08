<template>
  <div class="sidebar">
    <div class="user text-center">
      Привет, <span>{{login | secureEmail | capitalize}}</span>!
    </div>
    <h1 class="sidebar__title">
      <slot>Операция сложения</slot>
    </h1>
    <slot>
      <div class="sidebar__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus, deleniti distinctio dolor ducimus
        error eveniet facere facilis impedit minus mollitia necessitatibus, nesciunt obcaecati quam qui quos
        repudiandae! Asperiores, earum?
      </div></slot>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    login () {
      return this.$store.getters.user.login
    }
  },
  filters: {
    secureEmail (input) {
      return input.replace(/@+(.*)\./g, function (m) {
        return m.substr(0, 2) + '*'.repeat(m.length - 3) + '.'
      })
    },
    capitalize (input) {
      return input.charAt(0).toUpperCase() + input.slice(1)
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    width: 50%;
    height: 100%;
    background: $gradient;
    padding: 30px;
    color: #314a46;
    &__title {
      font-size: 3.7em;
    }
    &__description {
      font-size: 1.3em;
    }
  }

  @media all and (max-width: 790px) {
    .sidebar {
      display: none;
    }
  }
</style>
