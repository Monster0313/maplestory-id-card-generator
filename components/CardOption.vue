<template>
  <div class="card-option">
    <div class="card-option-container">
      <NameInput />
      <LevelInput />
      <DatePicker />
      <CharacterPicker />
      <UnionInput />
      <GuildInput />
      <ArcInput />
      <AutInput />
      <MonsterCollection />
      <ProfileSelect />
    </div>
    <div class="card-option-footer">
      <p>
        本網站所使用之圖片素材版權為<a href="https://www.nexon.com/">Nexon Inc.</a>所有。
      </p>
      <p>
        名片版面設計：<a href="https://www.instagram.com/dandantyty/">@dandantyty</a>
      </p>
      <p>
        網站規劃製作：<a href="https://github.com/Monster0313">Monster0313</a>
      </p>
    </div>
  </div>
</template>

<script>
import NameInput from './cardOption/NameInput.vue'
import LevelInput from './cardOption/LevelInput.vue'
import DatePicker from './cardOption/DatePicker.vue'
import CharacterPicker from './cardOption/CharacterPicker.vue'
import UnionInput from './cardOption/UnionInput.vue'
import GuildInput from './cardOption/GuildInput.vue'
import ArcInput from './cardOption/ArcInput.vue'
import AutInput from './cardOption/AutInput.vue'
import MonsterCollection from './cardOption/MonsterCollection.vue'
import ProfileSelect from './cardOption/ProfileSelect.vue'

export default {
  components: {
    NameInput,
    LevelInput,
    DatePicker,
    CharacterPicker,
    UnionInput,
    GuildInput,
    ArcInput,
    AutInput,
    MonsterCollection,
    ProfileSelect
  }
}
</script>

<style lang="scss" scoped>
.card-option {
  width: 320px;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.2);
  border-right: solid #606060 1px;
}
.card-option-footer {
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: #bbb;
}

.card-option-footer > p > a {
  color: #fff;
  text-decoration: none;
}
</style>
