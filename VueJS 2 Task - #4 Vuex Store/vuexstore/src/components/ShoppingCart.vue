<template>
  <div class="ShoppingCart">
    <h3>Shopping Cart</h3>
      <p v-for="(item, key) in cart" :key="key">
        {{ products[item].name }}
      </p>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  computed: {
    products: {
      get() {
        return this.$store.getters['allProducts']
      }
    },
    cart: {
      get() {
        return this.$store.getters['getCartItems']
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
