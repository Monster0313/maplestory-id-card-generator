<template>
  <div class="character-popup">
    <button
      class="close"
      @click="handleClose"
    >
      <img :src="closeIcon" alt="關閉">
    </button>
    <div class="character-popup-container">
      <button
        v-for="(item, index) in CHARACTER_LIST"
        :key="index"
        class="character"
        :style="{'background-image': 'url(' + characterBg(index) + ')'}"
        @click="handleSelect(item.name)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { CHARACTER_LIST } from '~/plugins/characterList'
import CloseIcon from '~/assets/images/close.png'

export default {
  data () {
    return {
      CHARACTER_LIST
    }
  },
  computed: {
    ...mapState('ui', ['isCharacterPopup']),
    ...mapState('card', ['character']),
    closeIcon () {
      return CloseIcon
    }
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    ...mapMutations('card', ['SET_CARD']),
    characterBg (index) {
      return require('~/assets/images/character-eyes/' + this.CHARACTER_LIST[index].type + '.png')
    },
    handleSelect (character) {
      this.SET_CARD({ key: 'character', value: character })
      this.SET_UI({ key: 'isCharacterPopup', value: false })
    },
    handleClose () {
      this.SET_UI({ key: 'isCharacterPopup', value: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.character-popup {
  position: relative;
  width: 60vw;
  height: 60vh;
  background-color: rgba($color: #000000, $alpha: 0.95);
  border-radius: 24px;
  z-index: 100;
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
.close > img {
  width: 20px;
}
.character-popup-container {
  width: 100%;
  height: 100%;
  padding: 60px 25px 25px 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}
.character-popup-container > button {
  width: 120px;
  height: 30px;
  margin: 5px;
  flex-shrink: 0;
  background-color: #ccc;
  border-radius: 6px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.character {
  filter: grayscale(1);
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.character:hover {
  cursor: pointer;
  filter: grayscale(0);
}
</style>
