import AssetsDetail from './components/assets/AssetsDetail.vue'
import AssetsList from './components/assets/AssetsList.vue'
import UsersDetail from './components/assets/UsersDetail.vue'
import UsersList from './components/assets/UsersList.vue'
import ProductsDetail from './components/assets/ProductsDetail.vue'
import ProductsList from './components/assets/ProductsList.vue'


export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/asset/:id',
            name: 'AssetsDetail',
            component: AssetsDetail
        },{
            path: '/asset/list/',
            name: 'AssetsList',
            component: AssetsList
        },{
            path: '/user/:id',
            name: 'UsersDetail',
            component: UsersDetail
        },{
            path: '/user/list/',
            name: 'UsersList',
            component: UsersList
        },{
            path: '/product/:id',
            name: 'ProductsDetail',
            component: ProductsDetail
        },{
            path: '/product/list/',
            name: 'ProductsList',
            component: ProductsList
        }
    ]
})