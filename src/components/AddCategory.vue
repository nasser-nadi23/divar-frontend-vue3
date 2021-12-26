<template>
  <input v-model.trim='category' placeholder='Enter Your Category'/>
  <button @click='addCategory'>Add Category</button>
</template>

<script>
export default {
  name: 'AddCategory',
  data() {
    return {
      category: ''
    };
  },
  methods: {
    async addCategory() {
      await fetch('http://localhost:3000/add-category', {
        method: 'POST',
        body: JSON.stringify({ category: this.category })
      });
      console.log('ok');
    }
  }
};
</script>

<style scoped>

</style>