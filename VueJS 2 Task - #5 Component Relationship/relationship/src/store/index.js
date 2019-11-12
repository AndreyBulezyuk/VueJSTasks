import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datasources: [
      {
        id:0,
        name:'Google Cloud Storage',
        interface: 'REST API',
        activated: true
      },
      {
        id:1,
        name:'AWS S3 Bucket',
        interface: 'REST API',
        activated: true
      },
      {
        id:2,
        name:'On-Deman Server Storage',
        interface: 'SSH',
        activated: false
      }
    ]
  },
  getters: {
    getAllDataSources(state) {
      return state.datasources
    },
    getDataSourceById: (state) => (id) => {
      for (let i = 0; i < state.datasources.length; i++) {
        if (state.datasources[i].id == id) {
          return state.datasources[i]
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  }
})
