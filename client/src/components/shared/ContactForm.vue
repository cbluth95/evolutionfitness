<template>
  <v-card height="auto" width="80vw" max-width="1000" light ref="form">
    <div style="background-color: #e0e0e0;" class="pTitle text-center">
      Contact Us
    </div>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
        ref="name"
        v-model="name"
        :rules="[() => !!name || 'This field is required']"
        :error-messages="errorMessages"
        label="Full Name"
        placeholder="John Doe"
        required
      ></v-text-field>
      <v-text-field
        ref="address"
        v-model="address"
        :rules="[
          () => !!address || 'This field is required',
          () =>
            (!!address && address.length <= 25) ||
            'Address must be less than 25 characters',
          addressCheck
        ]"
        label="Address Line"
        placeholder="Snowy Rock Pl"
        counter="25"
        required
      ></v-text-field>
      <v-text-field
        ref="city"
        v-model="city"
        :rules="[() => !!city || 'This field is required', addressCheck]"
        label="City"
        placeholder="Rawlins"
        required
      ></v-text-field>
      <v-text-field
        ref="state"
        v-model="state"
        :rules="[() => !!state || 'This field is required']"
        label="State/Province/Region"
        required
        placeholder="WY"
      ></v-text-field>
      <v-text-field
        ref="zip"
        v-model="zip"
        :rules="[() => !!zip || 'This field is required']"
        label="ZIP / Postal Code"
        required
        placeholder="82301"
      ></v-text-field>
      <v-text-field
        ref="msg"
        v-model="msg"
        name="message"
        label="message"
        id="msg"
        :counter="100"
        :rules="msgRules"
        required
      ></v-text-field>
    </v-card-text>
    <v-divider class="mt-5"></v-divider>
    <!-- Form MSG -->
    <v-snackbar
      v-model="alert"
      color="#34221a"
      absolute
      :bottom="true"
      :multi-line="true"
      :timeout="3000"
    >
      {{ sText }}
      <v-btn color="red" light @click="alert = false">Close</v-btn>
    </v-snackbar>
    <!-- End Form MSG -->
    <v-card-actions class="justify-center">
      <!-- <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer> -->
      <v-slide-x-reverse-transition>
        <v-tooltip v-if="formHasErrors" left>
          <template v-slot:activator="{ on }">
            <v-btn icon class="my-0" @click="resetForm" v-on="on">
              <v-icon>refresh</v-icon>
            </v-btn>
          </template>
          <span>Refresh form</span>
        </v-tooltip>
      </v-slide-x-reverse-transition>
      <v-btn
        width="30%"
        style="background-color: black;"
        color="white"
        outlined
        large
        text
        @click="submit"
        >Send</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    errorMessages: "",
    loading: false,
    alert: false,
    sText: "Your message has been sent.",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    msg: null,
    formHasErrors: false,
    msgRules: [
      v => !!v || "A message is required",
      v => (v && v.length <= 100) || "Message must be less than 100 characters"
    ]
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        msg: this.msg
      };
    }
  },

  watch: {
    name() {
      this.errorMessages = "";
    }
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? "Hey! I'm required" : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });

      if (this.formHasErrors) console.log("Debug: form has ERRORS");
      else {
        this.loading = true;
        let email = {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          msg: this.msg
        };
        // 104.248.186.212
        this.$axios.post("localhost:3001/api/email/send", email).then(res => {
          this.alert = true;
          console.log(res);
          this.resetForm();
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
.pTitle {
  font-family: Prime Regular;
  font-size: 2.5em;
  font-weight: bold;
}
</style>
