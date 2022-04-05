<template>
  <nav id="navbar" class="flex-row-center">
    <router-link class="logo" to="/">
      <img :src="logo" alt="楓葉圖示">
      <span>
        楓之谷名片產生器
      </span>
    </router-link>
    <button
      class="download"
      @click="downloadImage"
    >
      <img :src="download" alt="下載">
    </button>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import FileSaver from 'file-saver'
import domtoimage from 'dom-to-image'
import Logo from '~/assets/images/logo.png'
import Download from '~/assets/images/download.png'

export default {
  computed: {
    ...mapState('card', ['name']),
    logo () {
      return Logo
    },
    download () {
      return Download
    }
  },
  methods: {
    downloadImage () {
      domtoimage.toBlob(document.getElementById('card-demo'))
        .then(function (blob) {
          FileSaver.saveAs(blob, '楓之谷名片.png')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

#navbar {
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #212121;
  border-bottom: solid #606060 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin-left: 15px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.logo > img {
  width: 30px;
}
.logo > span {
  margin-left: 5px;
  padding-bottom: 4px;
  font-size: 24px;
  color: #ddd;
  text-decoration: none;
}
.download {
  margin-right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 28px;
  }
}
</style>
