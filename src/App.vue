<template>
  <div>
      <NavComponent/>
      <router-view/>
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
  name: 'App',
  components:{
    NavComponent,
  },
  rules:{
    'vue/multi-word-component-names': 0,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app{
  background-color: rgb(226, 214, 201);
  font-family: Raleway, sans-serif;
  font-weight: bolder;
  height: 100%; 
}

</style>
