<template>
  <div class="character-picker">
    <div class="character-picker-container">
      <span>角色職業：</span>
      <button @click="handlePopup">
        {{ character }}
      </button>
    </div>
    <div
      v-if="isCharacterPopup"
      class="character-list"
    >
      <CharacterPopup />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CharacterPopup from './CharacterPopup.vue'

export default {
  components: {
    CharacterPopup
  },
  computed: {
    ...mapState('card', ['character']),
    ...mapState('ui', ['isCharacterPopup'])
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    ...mapMutations('ui', ['SET_UI']),
    handlePopup () {
      this.SET_UI({ key: 'isCharacterPopup', value: true })
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 180px;
  height: 30px;
  margin-left: 4px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  font-family: 'Noto Sans TC', sans-serif;
  cursor: pointer;
}
.character-picker {
  margin-bottom: 15px;
}
.character-picker > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.character-picker-container > span {
  color: #fff;
}
.character-list {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
