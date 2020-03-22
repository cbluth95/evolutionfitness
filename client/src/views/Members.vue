<template>
  <v-row style="height: auto;" justify="center">
    <v-col cols="12">
      <div class="display-2 text-center mb-2" style="font-family: Prime Regular !important;">Gallery</div>
      <v-divider color="white" />
      <v-container>
        <v-card color="black">
          <v-container>
            <v-row>
              <v-col v-for="n in 7" :key="n" class="d-flex child-flex" cols="12" sm="6" md="4">
                <v-card
                  flat
                  tile
                  class="d-flex"
                  style="border: 2px solid white; border-radius: 8px;"
                >
                  <v-img
                    :src="require(`@/assets/images/equip${n}.png`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-col>
    <v-col cols="12">
      <div
        class="display-2 text-center mb-2"
        style="font-family: Prime Regular !important;"
      >Member Givaways</div>
      <v-divider color="white" />
      <v-container>
        <v-card color="primary">
          <v-container>
            <v-row justify="center">
              <v-col v-for="n in 1" :key="n" class="d-flex child-flex" cols="12" sm="6" md="4">
                <v-card flat tile class="d-flex" style="border: 2px solid grey;">
                  <v-img
                    :src="require(`@/assets/images/givaway${n}.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "members",
  data: () => {
    return {};
  }
};
</script>
