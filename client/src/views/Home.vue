<template>
  <div class="home">
    <v-container fluid class="pa-0">
      <!-- <v-sheet height="100vh">
        <home-slider />
      </v-sheet>-->
      <v-row no-gutters>
        <v-col cols="12">
          <v-img height="auto" class="bg-image">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" align="center" justify="center">
                    <v-card
                      style="border: 1px solid white;"
                      height="80%"
                      width="80%"
                      max-width="800"
                    >
                      <v-img
                        height="100%"
                        width="100%"
                        max-width="100%"
                        style="filter: opacity(.6)"
                        :src="require('../assets/images/imgfront.png')"
                      ></v-img>
                    </v-card>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" :align="checkAlign" justify="center">
                    <v-card
                      elevation="0"
                      color="transparent"
                      height="40%"
                      width="100%"
                      max-width="1000"
                    >
                      <v-row style="height: 100%;" no-gutters align="center" justify="center">
                        <div
                          class="heading text-center"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </v-row>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" align="center" justify="center">
                    <v-card
                      style="border: 1px solid white;"
                      height="80%"
                      width="80%"
                      max-width="800"
                    >
                      <v-img
                        height="100%"
                        width="100%"
                        max-width="100%"
                        style="filter: opacity(.6)"
                        :src="require('../assets/images/imgfront.png')"
                      ></v-img>
                    </v-card>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" :align="checkAlign" justify="center">
                    <v-card
                      elevation="0"
                      color="transparent"
                      height="40%"
                      width="100%"
                      max-width="1000"
                    >
                      <v-row style="height: 100%;" no-gutters align="center" justify="center">
                        <div
                          class="heading text-center"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </v-row>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    checkAlign() {
      let switchResult = () => {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "baseline";
          case "sm":
            return "baseline";
          case "md":
            return "center";
          case "lg":
            return "center";
          case "xl":
            return "center";
        }
      };
      return switchResult();
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
.bg-image {
  /* The image used */
  background-image: url("../assets/images/bgimage.png");

  /* Add the blur effect */

  /* Full height */
  height: 100%;
  z-index: 0;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
