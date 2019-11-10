<template>
  <div id="menu">
    <ul>
      <li v-for="(key, item) in menu" :key="key">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      menu: [
        {name: "List of Assets", url: "/asset/list/1"},
        {name: "First Asset", url: "/asset/1"},
        {name: "List of Users", url: "/user/list/1"},
        {name: "First User", url: "/user/1"},
        {name: "List of Products", url: "/product/list/1"},
        {name: "First Product", url: "/product/1"},
      ]
    }
  }
}
</script>