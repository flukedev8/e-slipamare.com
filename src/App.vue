<template>
  <v-app id="inspire">
    <!-- manu left bar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
      temporary
      width="200"
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>mdi-alpha-b-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>เกี่ยวกับเรา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/member">
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>วิธีการใช้งาน</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/contact">
          <v-list-item-action>
            <v-icon>mdi-phone-in-talk</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ราคา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item to="/contact">
          <v-list-item-action>
            <v-icon>mdi-phone-in-talk</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            portal
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- munu top bar -->

    <v-app-bar app color="primary" dark clipped-left hide-on-scroll >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>E-slipamare.com</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" text>
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn to="/about" text>
          <span class="mr-2">เกี่ยวกับเรา</span>
        </v-btn>
        <v-btn to="/member" text>
          <span class="mr-2">วิธีการใช้งาน</span>
        </v-btn>
        <v-btn to="/contact" text>
          <span class="mr-2">ราคา</span>
        </v-btn>
        <v-btn to="/contact" text>
          <span class="mr-2">contact</span>
        </v-btn>
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn color="white">
          <span class="portal">portal</span>
          <v-icon color="primary">mdi-login</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <!-- manu top bar -->

    <v-content>
      <router-view />
    </v-content>

    <v-footer dark padless>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        dark
        fab
        fixed
        bottom
        right
        color="pink accent-3"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <v-card flat tile class="primary white--text text-center flex">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
         
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>make by FlukeTECH 👩‍💻🎯❤</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  name: "App",
  data: () => ({
    drawer: false,
    fab: false,
    icons: [
      "mdi-facebook-box",
      "mdi-twitter-box",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
span.portal {
  color: #64DD17;
}
</style>
