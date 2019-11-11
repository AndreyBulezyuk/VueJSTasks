<template>
  <div class="home">
    <img alt="Vue logo" width="300" src="https://i0.wp.com/code.git-academy.com/wp-content/uploads/2019/10/400dpiLogo.jpg?zoom=1.100000023841858&fit=2077%2C1175&ssl=1">
    <hr>
    <ShoppingCart/>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h1> {{product.name}}</h1>
        <h3> {{product.price}} $</h3>
        <button @click="addToCart(product.id)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'home',
  components: {
    ShoppingCart
  },
  methods:{
    addToCart(id) {
      this.$store.dispatch('addToCart', id)
    }
  },
  computed: {
    products: {
      get() {
        return this.$store.getters['allProducts']
      }
    }
  }
}
</script>

<style scoped>
li { 
  list-style-type: none;
  margin-bottom: 100px;
}
button {
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 25px;
  border: 1px solid black ;
}
</style>