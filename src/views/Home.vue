<template>
  <div class="home">
    <HelloWorld/>
    <infobot/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import infobot from '@/components/home/infobot.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    infobot
  }
}
</script>
