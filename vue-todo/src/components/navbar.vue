<template lang="html">
  <nav>
    <v-snackbar v-model="snackbar" top :timeout="4000" color="#3AAFB9">
      <span>Project Added</span>
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">To</span>
        <span>Day</span>
      </v-toolbar-title>
      <!-- fills up all remaining space -->
      <v-spacer></v-spacer>

      <!-- dropdown menu -->

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="grey" text v-on="on">
            <span>menu</span>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app absolute color="primary lighten-2">
      <v-col>
        <v-flex class="mt-5 text-sm-center">
          <v-avatar size="100">
            <img src="https://i.redd.it/aniqhfqs7rz41.jpg" size="100" alt="avatar">
          </v-avatar>
          <p class="white--text subheading mt-1">Danny</p>
        </v-flex>
        <v-flex>
          <popup @projectAdded="snackbar = true"></popup>
        </v-flex>
      </v-col>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>

</template>

<script>
import popup from './popup'
export default {
  components: { popup },
  data(){
    return {
      drawer: false,
      snackbar: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ]
    };
  }
}
</script>
