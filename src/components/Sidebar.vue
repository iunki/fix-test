<template>
  <div class="sidebar">
    <div class="text-center">
      Привет, <span>{{login | secureEmail | capitalize}}</span>!
    </div>
    <h1 class="sidebar__title">
      <slot>Операция сложения</slot>
    </h1>
    <slot>
      <div class="sidebar__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus, deleniti distinctio dolor ducimus
          error eveniet facere facilis impedit minus mollitia necessitatibus, nesciunt obcaecati quam qui quos
          repudiandae!
        </p>
        <ul class="list">
          <li class="list__item">Шаг 1. Ввод данных</li>
          <li class="list__item">Шаг 2. Проверка</li>
          <li class="list__item">Шаг 3. Расчет</li>
          <li class="list__item">Шаг 4. Результат</li>
        </ul>
      </div>
    </slot>
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
    min-width: 50%;
    height: 100vh;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $gradient;
    padding: 30px;
    color: #314a46;
    box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.4);
    &__title {
      font-size: 3.7em;
      font-weight: inherit;
    }
    &__description {
      font-size: 1.3em;
    }
  }

  .list {
    padding: 0;
    list-style: none;
    &__item {
      font-weight: 500;
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 790px) {
    .sidebar {
      display: none;
    }
  }
</style>
