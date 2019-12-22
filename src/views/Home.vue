<template>
  <div class="home">
    <HelloWorld/>
    <infobot/>
    <price/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import infobot from '@/components/home/infobot.vue'
import price from '@/components/home/price.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    infobot,
    price
  }
}
</script>
