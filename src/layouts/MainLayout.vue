<template>
  <q-layout view="hHh lpR fFf"> 
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="(!($route.path == '/shoot') && !($route.path=='/login') && !($route.path=='/usertype'))">
      <tab-bar />
    </q-footer>
  </q-layout>
</template>

<script>
import TabBar from 'components/context/tabbar/TabBar'
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  components: {
    TabBar
  }
}
</script>

<style>
body .q-tabs__content {
  overflow: visible !important;
}
</style>
