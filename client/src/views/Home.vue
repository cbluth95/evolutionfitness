<template>
  <div class="home">
    <v-container>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn :href="source" icon large target="_blank" v-on="on">
            <v-icon large>mdi-code-tags</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            href="https://codepen.io/johnjleider/pen/aezMOO"
            target="_blank"
            v-on="on"
          >
            <v-icon large>mdi-codepen</v-icon>
          </v-btn>
        </template>
        <span>Codepen</span>
      </v-tooltip>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
