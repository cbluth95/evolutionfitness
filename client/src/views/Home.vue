<template>
  <div class="home">
    <!-- <v-btn @click="animateText()">
      animate
    </v-btn>-->
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
                      class="animated bounceInDown"
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
                        :src="require('../assets/images/equip5.png')"
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
                        <!-- animated typwriter text -->
                        <div
                          class="typewriter heading text-center output animated fadeIn"
                          id="output"
                        >
                          <!-- <h1 class="cursor"></h1> -->
                          <h1>Evolution Fitness is here to serve all of your workout needs 24/7. We have a sauna and affordable pricing. Check us out at address....</h1>
                          <p></p>
                        </div>
                      </v-row>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" align="baseline" justify="center">
                    <v-card
                      class="animated fadeIn"
                      elevation="0"
                      color="transparent"
                      height="40%"
                      width="100%"
                      max-width="1000"
                    >
                      <v-row style="height: 100%;" no-gutters align="center" justify="center">
                        <div class="text-center">
                          <p
                            class="pa-0 ma-0"
                            style="font-size: 10em;color:white;font-family: Prime Regular !important;"
                          >Open</p>
                          <p
                            class="pa-0 ma-0"
                            style="font-size: 5em;color:red; font-family: Gota Regular !important;line-height: .4;"
                          >24/7</p>
                        </div>
                      </v-row>
                    </v-card>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" class="pa-4">
                  <v-row style="height: 50vh;" align="center" justify="center">
                    <v-card
                      class="animated bounceInUp"
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
                        :src="require('../assets/images/equip6.png')"
                      ></v-img>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row style="height:800px;" align="center" justify="center">
        <contact-form />
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
export default {
  name: "home",
  data() {
    return {
      textArray: [
        "Evolution Fitness is here to serve all of your workout needs 24/7. We have a sauna and affordable pricing. Check us out at address...."
      ]
    };
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
    },
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
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.animateText("output", this.textArray);
  //   }, 3000);
  // },
  methods: {
    animateText(id, ar) {
      // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
      let i = 0,
        a = 0,
        isParagraph = false,
        cssId = id,
        cssArr = ar;

      // Typerwrite text content. Use a pipe to indicate the start of the second line "|".

      // Speed (in milliseconds) of typing.
      let speedForward = 50, //Typing Speed
        speedBetweenLines = 1000; //Wait between first and second lines

      typeWriter(cssId, cssArr);

      function typeWriter(cssId, cssArr) {
        let element = $("#" + cssId),
          aString = cssArr[a],
          eHeader = element.children("h1"), //Header element
          eParagraph = element.children("p"); //Subheader element
        // Determine if animation should be typing or backspacing
        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {
          // If character about to be typed is a pipe, switch to second line and continue.
          if (aString.charAt(i) == "|") {
            isParagraph = true;
            eHeader.removeClass("cursor");
            eParagraph.addClass("cursor");
            i++;
            setTimeout(function() {
              typeWriter(cssId, cssArr);
            }, speedBetweenLines);
            // If character isn't a pipe, continue typing.
          } else {
            // Type header or subheader depending on whether pipe has been detected
            if (!isParagraph) {
              eHeader.text(eHeader.text() + aString.charAt(i));
            } else {
              eParagraph.text(eParagraph.text() + aString.charAt(i));
            }
            i++;
            setTimeout(function() {
              typeWriter(cssId, cssArr);
            }, speedForward);
          }
          // If full string has been typed, switch to backspace mode.
        } else {
          console.log("done");
          eHeader.removeClass("cursor");
          return;
        }
      }
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
.output {
  text-align: center;
  font-family: "Source Code Pro", monospace;
  color: white;
  h1 {
    font-size: 30px;
  }
}

/* Typewriter Cursor Styling */

.cursor::after {
  content: "";
  display: inline-block;
  margin-left: 3px;
  background-color: white;
  animation-name: blink;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
h1.cursor::after {
  height: 24px;
  width: 13px;
}
p.cursor::after {
  height: 13px;
  width: 6px;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
