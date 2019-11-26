<template>
  <!-- <v-content class="main-view">
    <v-container fluid style="margin-bottom: 125px;"> </v-container>
  </v-content> -->

  <v-content>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col class="shrink">
          <!-- <v-slide-y-transition mode="out-in"> -->
          <router-view />

          <!-- </v-slide-y-transition> -->
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style scoped></style>
