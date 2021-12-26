<template>
  <header>
    <h2>Divar Application</h2>
    <div class='routerlinks'>
      <router-link to='/all-advertisings'>All Advertisings</router-link>
      <router-link to='/all-categories'>All Categories</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>
header{
  width: 100vw;
  height: 7rem;
  background-color: #4a9d93;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2{
  color: #f8f8f3;
  font-family: sans-serif;
  margin-left: 1rem;
}

a{
  text-decoration: none;
  color: #f8f8f3;
  cursor: pointer;
  margin-right: 2rem;
}

a:hover{
 opacity: .7;
}

.routerlinks{
  display: flex;
}


</style>