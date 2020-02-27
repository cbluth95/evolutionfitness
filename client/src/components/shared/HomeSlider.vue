<template>
  <v-container class="pa-0 mb-0">
    <v-row>
      <v-col cols="12" class="pa-0">
        <!-- <v-sheet>
          <v-img width="100vw" :src="require('@/assets/images/banner.png')"></v-img>
        </v-sheet>-->

        <v-carousel cycle height="94.3vh" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#000", "#000", "#000", "#000", "#000", "#000"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>