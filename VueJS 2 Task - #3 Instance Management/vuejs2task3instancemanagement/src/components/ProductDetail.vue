<template>
  <div class="ProductDetail">
      <h2>{{notification}}</h2>
      <p>
        Quantity: <input type="text" v-model="quantity"><br>
        Total Value: {{ totalValue }}$
      </p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',

  data() {
    return {
      product: {
        id: 1,
        name: 'VueJS Certificate',
        price: 999
      },
      quantity: 0,
      // You could set 'notification' to desired default value 
      // instead doing it trough life cycle hook 
      notification: '' 
    }
  },

  computed: {
    totalValue: {
      get() {
        return this.quantity*this.product.price
      }
    }
  },

  beforeMount() {
    if(this.quantity==0) {
      this.notification = 'Please specify quantity!'
    }
  },

  updated() {
    if(this.quantity != 0) {
      this.notification = 'Quantity updated!'
    }
  }
}
</script>

<style scoped>
h2 {
  color:orange;
  border: 1px solid orange;
  width:50%;
  margin: 0 25% 0 25%;
}
input {
  height: 40px;
  width: 70px;
  font-size: 25px;
}
.ProductDetail {
  text-align: center;
}

.ProductDetail p {
  font-size: 30px;
}
</style>
