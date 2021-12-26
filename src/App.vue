<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/TheHeader';


export default {
  components: {
    TheHeader
  }
};
</script>

<style scoped>
body{
  overflow-x: hidden;
}
*{
  margin: 0;
  padding: 0;
}
</style>

