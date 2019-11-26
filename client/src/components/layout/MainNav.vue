<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped color="white" light>
      <v-row no-gutters class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <v-avatar size="256" tile>
            <img :src="require('@/assets/logo.jpg')" alt="John" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-list dense>
        <v-list-item v-for="item in navItems" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1"
          >Members
        </v-subheader>

        <v-divider />

        <!-- Add a check if visitor is signed in or not -->
        <!-- <div v-if="isAuth == true">

        </div> -->

        <v-list>
          <v-list-item v-for="item in navItems2" :key="item.text" link>
            <!-- <v-list-item-avatar>
              <img
                :src="
                  `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
                "
                alt=""
              />
            </v-list-item-avatar> -->

            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <!-- <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="black" dense height="75">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="mr-12 align-center">
        <span class="title">EvolutionFitness</span>
      </v-toolbar-title>

      <v-spacer />

      <!-- <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        />
      </v-row> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    navItems: [{ icon: "home", text: "Home", path: "/" }],
    navItems2: [{ icon: "mdi-login", text: "Sign-In/Up", path: "/signin" }]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
