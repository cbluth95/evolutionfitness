<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped color="secondary" light>
      <v-row no-gutters class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <v-avatar size="256" tile>
            <img :src="require('@/assets/logo.jpg')" alt="Logo" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-list dense class="pt-0">
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
            <v-list-item-title class="navlink">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-subheader class="mt-4 grey--text text--darken-1"
        >Members</v-subheader-->

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
      <v-row v-show="isMobile">
        <!-- probably a better way to set width of this component -->
        <v-bottom-navigation width="99%" fixed>
          <v-btn
            value="facebook"
            href="https://www.facebook.com/getbigdreambigger/"
            target="_blank"
          >
            <span>Facebook</span>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn value="phone" href="tel:307-321-6782">
            <span>Phone</span>
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn value="mail" href="mailto:evolutionfitness307@gmail.com">
            <span>Mail</span>
            <v-icon>mdi-mail</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="primary"
      dense
      height="75"
      style="border-bottom: 1px solid white !important;"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="mr-12 align-center">
        <span class="titleP1">Evolution</span>
        <span class="titleP2">Fitness</span>
      </v-toolbar-title>

      <v-spacer />
      <!-- add phone icon buttons and link to signin -->
      <v-row no-gutters justify="end" v-show="!isMobile">
        <div>
          <v-btn
            class="sLinks"
            icon
            href="https://www.facebook.com/getbigdreambigger/"
            target="_blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn class="sLinks" icon href="tel:307-321-6782">
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn
            class="sLinks"
            icon
            href="mailto:evolutionfitness307@gmail.com"
          >
            <v-icon>mdi-mail</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiAccountGroupOutline } from "@mdi/js";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    navItems: [
      { icon: "home", text: "Home", path: "/" },
      { icon: mdiAccountGroupOutline, text: "Members", path: "/members" },
      { icon: "mail", text: "Contact", path: "/contact" }
      // { icon: "info", text: "About", path: "/about" }
    ]
    // navItems2: [{ icon: "mdi-login", text: "Sign-In/Up", path: "/signin" }]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: {
    isMobile() {
      let switchResult = () => {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return true;
          case "sm":
            return true;
          case "md":
            return false;
          case "lg":
            return false;
          case "xl":
            return false;
        }
      };
      return switchResult();
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
.v-navigation-drawer__content {
  border-right: 2px solid #de282f;
  /* border-left: 2px solid #de282f; */
}

// Vuetify overrides find a better way than !important
.titleP1 {
  font-family: Prime Regular !important;
  font-size: 1.5em !important;
  color: $primary;
  font-weight: bold;
  letter-spacing: 1px;
}
.titleP2 {
  font-family: Prime Regular !important;
  font-size: 1.5em !important;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 2px;
}
.navlink {
  font-family: Prime Regular !important;
  font-size: 1.2em !important;
  font-weight: bold !important;
}
.sLinks:hover {
  color: red !important;
}
</style>
