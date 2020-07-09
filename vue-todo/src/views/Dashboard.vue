<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>
          <span>Sort projects by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card text class="px-3" v-for="project in projects" :key="project.title">
        <v-row :class="`px-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="subtitle grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="subtitle grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="subtitle grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div class="right">
              <v-chip small :color="project.status" class="white--text caption my-2">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  data(){
    return {
      projects: [
        { title: 'Design a new website', person: 'danny', due: 'July 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'eat some nice green tea sponge cake', person: 'Danny', due: 'today', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Get good with Python', person: 'also danny', due: 'summer 2020', status: 'yes', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Get a nice cali job', person: 'Danny Wu', due: 'soon', status: 'going to happen', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop){
      return this.projects.sort((x, y) => x[prop] > y[prop] ? 1 : -1);
    }
  },
  created(){
    //res is response
    db.collection('users').onSnapshot(res => {
      //new changes
      const changes = res.docChanges();

      changes.forEach(change => {
        //type: added, removed, modified
        if(change.type === 'added'){
          this.projects.push({
            //spreads all individual properties (content, title...) into object
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    });
  }

}
</script>

<style>
.project.complete {
  border-left: 4px solid #D5F9DE;
}
.project.ongoing {
  border-left: 4px solid #9D5C63;
}
.project.yes {
  border-left: 4px solid #F9C784;
}
.project.happen {
  border-left: 4px solid #87ceeb;
}

.v-chip.complete{
  background: #D5F9DE;
}
.v-chip.ongoing{
  background: #9D5C63;
}
.v-chip.yes{
  background: #F9C784;
}
.v-chip.happen{
  background: #87ceeb;
}
</style>
