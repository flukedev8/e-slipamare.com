import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#FF4081',
        secondary: '#D81B60',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background:'#fff'
      },
    },
  },
});
