<template>
  <div class="home">
    <HelloWorld/>
    <bank/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import bank from '@/components/home/anybank.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    bank
  }
}
</script>
