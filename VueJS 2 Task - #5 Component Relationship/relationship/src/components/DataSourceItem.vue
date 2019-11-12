<template>
  <div class="DataSourceItem">
    <h2 :style="activated()"> 
      {{this.datasource.name}}
    </h2>
    <h3> {{datasource.interface}}</h3>
  </div>
</template>

<script>
export default {
  name: 'DataSourceItem',
  props: {
    id: Number
  },
  computed: {
    datasource: {
      get(){
        return this.$store.getters.getDataSourceById(this.id)
      }
    }
  },
  methods: {
    activated() {
      if (this.datasource.activated) {
        return 'background-color:green;'
      }
      return 'background-color:red;'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
