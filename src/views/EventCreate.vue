<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <ul v-for="cat in categories" :key="cat">
      <li>{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }} items </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories']) 
  }
}
</script>

<style scoped>

</style>
