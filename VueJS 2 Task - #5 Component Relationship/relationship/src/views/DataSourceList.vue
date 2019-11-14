<template>
  <div class="home">
    <img 
      alt="German IT Academy"
      width="200"
      src="https://i0.wp.com/code.git-academy.com/wp-content/uploads/2019/10/400dpiLogo.jpg?zoom=1.100000023841858&fit=2077%2C1175&ssl=1">
    <div v-for="datasource in datasources" :key="datasource.id">  
      <DataSourceItem :id="datasource.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataSourceItem from '@/components/DataSourceItem.vue'

export default {
  name: 'DataSourceList',
  components: {
    DataSourceItem
  },
  computed: {
    datasources: {
      get(){
        return this.$store.getters['getAllDataSources']
      }
    },
  }
}
</script>
