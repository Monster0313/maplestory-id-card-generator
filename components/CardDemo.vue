<template>
  <div class="card-demo">
    <div class="card-demo-container">
      <div class="card-header">
        <!-- ID 創角日期 伺服器 -->
        <div class="nail-wood-container">
          <div class="nail-tl">
            <div class="nail" />
          </div>
          <div class="nail-tr">
            <div class="nail" />
          </div>
          <div class="nail-bl">
            <div class="nail" />
          </div>
          <div class="nail-br">
            <div class="nail" />
          </div>
          <div class="wood-container">
            <div
              v-for="i in 8"
              :key="i"
              class="wood"
            />
          </div>
        </div>
        <div class="title-container">
          <p
            class="name"
            :style="name.length >= 7 ? { 'font-size': '5rem' } :
              name.length > 5 ? { 'font-size': '5.5rem' } :
              { 'font-size': '6rem' }"
          >
            {{ name || '小怪物語' }}
          </p>
          <p class="world-date">
            {{ world ? `伺服器：${world}｜創角日期：${startDate}（${dateCount}天）` : `伺服器：琉德｜創角日期：${startDate}（${dateCount}天）` }}
          </p>
        </div>
      </div>
      <div class="card-body">
        <!-- 角色照片 職業 等級 ARC AUT 公會 -->
        <div class="profile">
          <img
            :src="profile ? profile : profileImage"
            alt="角色圖片"
          >
        </div>
        <div class="info-container">
          <p>
            {{ `職業：${character}` || '職業：阿戴爾' }}
          </p>
          <p>
            {{ `等級：${level}` || '等級：258' }}
          </p>
          <p>
            {{ guild ? `公會：${guild}` : '公會：無' }}
          </p>
          <p>
            {{ level > 200 ? `ARC：${arc} / 1320` : '' }}
          </p>
          <p>
            {{ level > 260 ? `AUT：${aut} / 330` : '' }}
          </p>
        </div>
      </div>
      <div class="card-footer">
        <!-- 怪物收藏 聯盟戰地 -->
        <div class="nail-wood-container">
          <div class="nail-tl">
            <div class="nail" />
          </div>
          <div class="nail-tr">
            <div class="nail" />
          </div>
          <div class="nail-bl">
            <div class="nail" />
          </div>
          <div class="nail-br">
            <div class="nail" />
          </div>
          <div class="wood-container">
            <div
              v-for="i in 8"
              :key="i"
              class="wood"
            />
          </div>
        </div>
        <div class="monster-union">
          <div class="monster-union-container">
            <p>聯盟戰地</p>
            <p class="score">
              {{ `${union} / 8000` }}
            </p>
          </div>
          <div class="monster-union-container">
            <p>怪物收藏</p>
            <div class="score">
              {{ `${monsterCollection} / 934` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import ProfileImage from '~/assets/images/profile.png'

export default {
  computed: {
    ...mapState('card', ['world', 'name', 'level', 'startDate', 'character',
      'union', 'guild', 'arc', 'aut', 'monsterCollection', 'profile']),
    dateCount () {
      const today = dayjs(new Date())
      const date1 = dayjs(this.startDate)
      return Math.floor((today.diff(date1, 'hour') / 24))
    },
    profileImage () {
      return ProfileImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

* {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 700;
}

.card-demo {
  width: 80vh;
  height: 80vh;
  min-width: 700px;
  min-height: 700px;
  padding: 20px;
  margin-top: 20px;
  background-color: #171616;
  z-index: 1;
}

.card-demo-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.card-header {
  position: relative;
  width: 100%;
  height: 30%;
  background-color: #7f6000;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card-body {
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  background-color: #fff;
  border-top: solid 6px #171616;
  border-bottom: solid 6px #171616;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.card-footer {
  position: relative;
  width: 100%;
  height: 20%;
  border-top: none;
  background-color: #7f6000;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.title-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .name {
    color: #171616;
    margin-top: 10px;
  }
  .world-date {
    font-size: 24px;
    color: #171616;
    margin-bottom: 15px;
  }
}

.profile {
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile > img {
  height: 35vh;
  min-height: 285px;
}

.info-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 30px;
  color: #171616;
}

.monster-union {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 4;
  .monster-union-container {
    font-size: 42px;
    font-weight: 700;
    color: #171616;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .monster-union-container > .score {
    font-size: 36px;
  }
}

.nail-wood-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.nail {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #171616;
  border-radius: 50%;
}

.nail::before {
  position: absolute;
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  top: 25%;
  left: 25%;
  background-color: #7f7f7f;
  border-radius: 50%;
  z-index: 2;
}

.nail::after {
  position: absolute;
  content: '';
  display: block;
  width: 2px;
  height: 98%;
  left: calc(50% - 1px);
  background-color: #171616;
  z-index: 3;
  transform: rotate(60deg);
}
.nail-tl, .nail-tr, .nail-bl, .nail-br {
  position: absolute;
}
.nail-tl {
  top: 10px;
  left: 10px;
}
.nail-tr {
  top: 10px;
  right: 10px
}
.nail-bl {
  bottom: 10px;
  left: 10px;
}
.nail-br {
  bottom: 10px;
  right: 10px;
}
.nail-tl, .nail-br {
  transform: rotate(60deg);
}
.wood-container {
  width: 100%;
  height: 100%;
}
.wood {
  position: absolute;
  background-color: rgba($color: #604900, $alpha: 0.8);
  z-index: 2;
}
.wood:nth-child(1) {
  width: 120px;
  height: 15px;
  top: 15%;
  left: 12%;
}
.wood:nth-child(2) {
  width: 120px;
  height: 8px;
  top: 55%;
  left: 10%;
}
.wood:nth-child(3) {
  width: 100px;
  height: 10px;
  top: 88%;
  left: 7%;
}
.wood:nth-child(4) {
  width: 120px;
  height: 15px;
  top: 15%;
  left: 62%;
}
.wood:nth-child(5) {
  width: 140px;
  height: 18px;
  top: 55%;
  left: 45%;
}
.wood:nth-child(6) {
  width: 120px;
  height: 15px;
  top: 80%;
  left: 30%;
}
.wood:nth-child(7) {
  width: 100px;
  height: 12px;
  top: 33%;
  left: 76%;
}
.wood:nth-child(8) {
  width: 100px;
  height: 12px;
  top: 72%;
  left: 70%;
}
</style>
