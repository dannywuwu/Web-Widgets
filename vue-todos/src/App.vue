<template>
  <v-app>
    <navbar></navbar>
    <v-content class="grey lighten-4">
      <div class="container mx-4">
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: { navbar },
  data: () => ({
    //
  }),
};
</script>
