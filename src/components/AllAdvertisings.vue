<template>
  <div class='searchContainer'>
    <input class='categoryInput' v-model.trim='search' placeholder='Search Your Category'/>
    <button @click='searchMethod'>search</button>
  </div>
  <the-spinner v-if='isLoading'></the-spinner>
  <div v-else>
    <div v-if='error'>
      <p class='notFound'>404</p>
      <p class='notFound-paragraph'>CATEGORY NOT FOUND BABY</p>
    </div>
    <div v-else class='container'>
      <div v-for='item in items' :key='item.id' class='card'>
        <img :src='item.image'/>
        <p>عنوان: {{item.text}}</p>
        <p>قیمت: {{item.price}}</p>
        <p>شهر: {{item.city}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import TheSpinner from '../components/TheSpinner'
export default {
  components:{
    TheSpinner
  },
  data() {
    return {
      search: '',
      items:[],
      error:false,
      isLoading:false
    };
  },
  methods: {
    async searchMethod() {
      try{
        this.isLoading=true
        this.error=false
        const response=await fetch(`http://localhost:3000/nasser?search=${this.search}`)
        console.log(response);
        const data=await fetch('http://localhost:3000/advertising')
        if(!response.ok){
          this.error=true
        }
        const body=await data.json()
        this.items=body
        this.isLoading=false
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  font-family: "2  Nazanin";
  margin-left: 25px;
  font-size: 1rem;
}
.card{
  width: 300px;
  height: 330px;
  background-color: #e6eeed;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
}

.card img{
  border-radius: 100px;
  width: 150px;
  height: 150px;
  margin-top: 10px;
}

.searchContainer{
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
}

.searchContainer input {
  padding: .7rem 3rem;
  border: 1px solid #bab9b9;

}

.searchContainer input:focus{
  outline: unset;
}

.searchContainer button{
  border-radius: 5px;
  margin-left: 5px;
  border: 1px solid #bab9b9;
  padding: 1rem;
}

.notFound {
  text-align: center;
  font-size: 10rem;
  font-family: sans-serif;
  margin-top: 5rem;
}

.notFound-paragraph{
  text-align: center;
  font-size: 1rem;
  font-family: sans-serif;
  margin-top: -5rem;
}


</style>