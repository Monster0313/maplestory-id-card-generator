<template>
  <div id="world-list">
    <div
      v-for="(item, index) in worldList"
      :key="index"
      class="world"
    >
      <img
        :src="worldOption(item.id)"
        @click="setWorldToCard(item.name)"
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Aria from '~/assets/images/world/Aria.png'
import Freud from '~/assets/images/world/Freud.png'
import Ryude from '~/assets/images/world/Ryude.png'
import Rhinne from '~/assets/images/world/Rhinne.png'
import Alicia from '~/assets/images/world/Alicia.png'
import Orchid from '~/assets/images/world/Orchid.png'
import Reboot from '~/assets/images/world/Reboot.png'

export default {
  data () {
    return {
      worldList: [
        {
          id: 'Aria',
          name: '艾麗亞'
        },
        {
          id: 'Freud',
          name: '普力特'
        },
        {
          id: 'Ryude',
          name: '琉德'
        },
        {
          id: 'Rhinne',
          name: '優依娜'
        },
        {
          id: 'Alicia',
          name: '愛麗西亞'
        },
        {
          id: 'Orchid',
          name: '殺人鯨'
        },
        {
          id: 'Reboot',
          name: 'Reboot'
        }
      ]
    }
  },
  computed: {
    ...mapState('card', ['world'])
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    worldOption: (option) => {
      switch (option) {
        case 'Aria':
          return Aria
        case 'Freud':
          return Freud
        case 'Ryude':
          return Ryude
        case 'Rhinne':
          return Rhinne
        case 'Alicia':
          return Alicia
        case 'Orchid':
          return Orchid
        case 'Reboot':
          return Reboot
        default:
          return Aria
      }
    },
    setWorldToCard (option) {
      this.SET_CARD({ key: 'world', value: option })
    }
  }
}
</script>

<style lang="scss" scoped>
#world-list {
  width: 120px;
  height: 280px;
  margin-top: 40px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #fff, $alpha: 0.4);
  border-radius: 12px;
  border: solid rgba($color: #fff, $alpha: 0.6) 2px;
}
.world {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.world > img {
  cursor: pointer;
}
</style>
