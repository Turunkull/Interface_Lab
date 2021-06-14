<template>
  <div>
    <ul>
      <li
        v-for="item in navItems"
        :key="item.id"
        @click="activeNav = item.id">
        <router-link
          :to="item.path"
          :class="{active : activeNav === item.id}">
          <img :src="`/icons/${item.title.toLowerCase()}.svg`" :alt="item.title">
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  componentName: 'Sidebar',
  data() {
    return {
      navItems: [
        {
          id: 1,
          title: 'Standard',
          path: '/standard-calculator'
        },
        {
          id: 2,
          title: 'Programmer',
          path: '/programmer-calculator'
        },
      ],
      activeNav: 1
    }
  },
}
</script>

<style scoped>

</style>
