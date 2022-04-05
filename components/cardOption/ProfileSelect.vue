<template>
  <div class="profile-select">
    <div class="profile-select-container">
      <span>角色圖片：</span>
      <a
        class="link"
        href="https://maplestory.studio/"
        target="_blank"
        rel="noreferrer noopener"
      >
        製作
      </a>
      <input
        ref="file"
        type="file"
        accept="image/png"
        style="display: none"
        @change="imageUpload($event)"
      >
      <button
        class="upload-button"
        @click="$refs.file.click()"
      >
        上傳
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('card', ['profile'])
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    imageUpload (event) {
      let mediaObject = {}
      const file = event.target.files
      if (file.length > 0) {
        mediaObject.imageName = 'profileImage'
        mediaObject.image = URL.createObjectURL(file[0])
        mediaObject.imageAlt = '角色圖片'
        const img = new Image()
        img.src = window.URL.createObjectURL(file[0])
        img.onload = () => {
          window.URL.revokeObjectURL(this.src)
        }
      }
      this.SET_CARD({ key: 'profile', value: mediaObject.image })
      mediaObject = {}
    }
  }
}
</script>

<style lang="scss" scoped>
button, .link {
  width: 88px;
  height: 30px;
  margin-left: 3px;
  border: none;
  color: #000;
  background-color: #fff;
  font-size: 18px;
  font-family: 'Noto Sans TC', sans-serif;
  cursor: pointer;
}
.link {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
.profile-select {
  margin-bottom: 15px;
}
.profile-select > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.profile-select-container > span {
  color: #fff;
}
.profile-select-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
