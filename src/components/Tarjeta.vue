<template lang="html">
  <div>
    <sui-card>
      <sui-card-content>
        <sui-card-header>
            <span>{{film.title}}</span>
        </sui-card-header>
        <router-link :to="`/pelicula/${film.id}`">
            Detalle
        </router-link>
            <sui-card-meta>
            <span>{{film.description}}</span>
            </sui-card-meta>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'Tarjeta',
  props: ['film']
}
</script>

<style scoped>

</style>
