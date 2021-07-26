<template lang="html">
  <sui-item-group>
    <sui-item>
      <sui-item-content>
        <sui-item-header>Identificador: {{film.id}}</sui-item-header>
        <sui-item-meta>
          <span>Titulo: {{film.title}}</span>
        </sui-item-meta>
        <sui-item-description>
            <p>Titulo original: {{film.original_title}}</p>
            <p>
                Descripcion: {{film.description}}
            </p>
            <h3>Director: {{film.director}}</h3>
            <h3>Fecha de lanzamiento: {{film.release_date}}</h3>
            <h3>Duracion: {{film.running_time}}</h3>
            <h3 v-if="film.rt_score > 80" style="color: green">Valoracion: {{film.rt_score}}</h3>
            <h3 v-else style="color: yellow">Valoracion: {{film.rt_score}}</h3>
        </sui-item-description>
      </sui-item-content>
    </sui-item>
  </sui-item-group>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Detalle',
  computed: {
    ...mapState(['film'])
  },
  methods: {
    ...mapActions(['getFilm'])
  },
  created () {
    this.getFilm(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
