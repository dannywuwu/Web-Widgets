<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">

          <v-card flat class="text-sm-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }} </div>
            </v-card-text>
          </v-card>
          <v-card-actions>
            <v-btn text color="grey">
              <v-icon small left>mdi-message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      team:[
        { name: 'danny', role: 'c', avatar: 'https://i.redd.it/dqy62t2q1tz41.jpg'},
        { name: 'Danny', role: 'o', avatar: 'https://i.redd.it/boug63kg8qz41.jpg'},
        { name: 'also danny', role: 'o', avatar: 'https://i.redd.it/3h62ndqiftz41.jpg'},
        { name: 'Danny Wu', role: 'l', avatar: 'https://i.redd.it/w84rrrf2ewz41.jpg'},
        { name: 'yoshi', role: 'beeg', avatar: 'https://steamuserimages-a.akamaihd.net/ugc/913575713667691550/199CAA393B5AD1C9B8ADEF9D4B1DA18ED0A85B78/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'}
      ]
    }
  }
}
</script>
