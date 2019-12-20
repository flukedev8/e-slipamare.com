<template>
<section>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" md="6" sm="12" align="center" justify="center">
        <center><v-img
          src="../assets/img/Picture4.png"
          aspect-ratio="1"
          max-width="500"
          max-height="500"
        ></v-img></center>
      </v-col>
      <v-col class="text-center" cols="12" md="6" sm="12">
        <h1 class="display-3 font-weight-light">Welcome to the <br> E-slipamare</h1><br>
        <h4 class="font-weight-thin">เราคือ ผู้ให้บริการ Bot อ่าน E-slip ของธนาคารต่างๆภายในประเทศไทย</h4>
      </v-col>
      
    </v-row>
    <bank/>
  </v-container>
  </section>
</template>

<script>
import bank from '@/components/home/anybank.vue'

export default {
  
  components: {
    bank
  },
  data: () => ({})
};
</script>

<style>

</style>

