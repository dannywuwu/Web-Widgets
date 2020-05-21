<template lang="html">
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn depressed color="#85FFC7" v-on="on">Add new project</v-btn>
      </template>

      <v-card>
        <v-card-title class="lighten-2">
          <h3>Add a New Project</h3>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-format-title"
            :rules="inputRules"
            ></v-text-field>

            <v-textarea
            label="Information"
            value="Project information here"
            v-model="content"
            prepend-icon="mdi-pencil-box-outline"
            ></v-textarea>

            <v-btn depressed color="#85FFC7" class="mt-3" @click="submit" :loading="loading">Add Project</v-btn>
          </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data(){
    return {
      dialog: false,
      title: '',
      content: '',
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false
    };
  },
  methods: {
    submit(){
      if(this.$refs.form.validate()){
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          person: 'Danny',
          status: 'ongoing'
        }
        this.title = '';
        this.content = '';
        db.collection('users').add(project).then(() =>{
          this.loading = false;
          this.dialog = false;
          this.$emit('projectAdded');
        });
      } else {
        console.error('Invalid input');
      }
    }
  }
};
</script>
