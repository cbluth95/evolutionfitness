<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped color="secondary" light>
      <v-row no-gutters class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <v-avatar size="256" tile>
            <img :src="require('@/assets/logo.jpg')" alt="John" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-list dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.text"
          :to="item.path"
          link
        >
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

        <v-list>
          <v-list-item v-for="item in navItems2" :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="primary" dense height="75">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="mr-12 align-center">
        <span class="title">EvolutionFitness</span>
      </v-toolbar-title>

      <v-spacer />
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
    navItems: [
      { icon: "home", text: "Home", path: "/" },
      { icon: "info", text: "About", path: "/about" }
    ],
    navItems2: [{ icon: "mdi-login", text: "Sign-In/Up", path: "/signin" }]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
.v-navigation-drawer__content {
  border-right: 2px solid #de282f;
}
</style>
