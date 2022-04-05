<template>
  <div class="main">
    <NavBar />
    <div class="main-container">
      <div id="card-option">
        <CardOption />
      </div>
      <div id="card-demo">
        <CardDemo />
      </div>
      <WorldList />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CardOption from '~/components/CardOption.vue'
import WorldList from '~/components/WorldList.vue'
import CardDemo from '~/components/CardDemo.vue'

export default {
  components: {
    NavBar,
    CardOption,
    WorldList,
    CardDemo
  }
}
</script>

<style lang="scss" scoped>
  .main {
    min-width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .main-container {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  #card-option {
    height: calc(100vh - 60px);
    z-index: 2;
  }
  #card-demo {
    z-index: 1;
  }
</style>
