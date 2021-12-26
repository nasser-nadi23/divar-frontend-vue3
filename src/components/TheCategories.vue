<template>
  <div>
    <h2>All The Categories</h2>
    <p v-for='category in categories' :key='category'>{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheCategories',
  data() {
    return {
      categories: []
    };
  },

  methods: {
    async getAllCategories() {
      const response = await fetch('http://localhost:3000/allCategories');
      const data = await response.json();
      this.categories = data;
    }
  },
  created() {
    this.getAllCategories();
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

p{
  color: #3d008d;
  font-family: sans-serif;
  font-size: 1rem;
}
</style>