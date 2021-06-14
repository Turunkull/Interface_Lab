<template>
  <div id="calculator">
    <div class="sidebar">
      <sidebar/>
    </div>
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="history"></div>
  </div>
</template>

<script>
import Sidebar from '@/views/sidebar.vue';

export default {
  name: 'calculator',
  components: {
    Sidebar,
  }
}
</script>

<style scoped>

</style>
