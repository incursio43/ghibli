<template lang="html">
  <sui-grid celled centered>
    <suid-grid-row>
      <suid-grid-col :width="8">
        <div class="home">
          <sui-list divided relaxed>
            <sui-list-item v-for="film in films" :key="film.id">
              <!-- <sui-list-icon name="puzzle" size="large" vertical-align="middle" /> -->
              <sui-list-content>
                <Tarjeta :film="film" />
              </sui-list-content>
            </sui-list-item>
          </sui-list>
        </div>
      </suid-grid-col>
    </suid-grid-row>
  </sui-grid>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import Tarjeta from '../components/Tarjeta.vue'

export default {
  name: 'Home',
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['films'])
  },
  methods: {
    ...mapActions(['getFilms'])
  },
  created () {
    this.getFilms()
  }
}
</script>
