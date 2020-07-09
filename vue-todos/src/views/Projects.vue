<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">

      <template>
        <v-row justify="center">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="project in myProjects" :key="project.name">
              <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text class="px-4 grey--text">
                    <div class="font-weight-bold">{{ project.due }}</div>
                    <div>{{ project.content }}</div>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </template>
  </v-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {

  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'danny', due: 'July 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'eat some nice green tea sponge cake', person: 'Danny', due: 'today', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Get good with Python', person: 'also danny', due: 'summer 2020', status: 'yes', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Get a nice cali job', person: 'Danny Wu', due: 'soon', status: 'going to happen', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === 'Danny');
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
