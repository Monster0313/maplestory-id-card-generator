<template>
  <div class="monster-collection">
    <label>怪物收藏：</label>
    <input
      v-model.number="inputMonster"
      type="number"
      min="0"
      max="934"
      step="1"
      @keypress="numbersOnly"
      @keyup="setMonster"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputMonster: 0
    }
  },
  computed: {
    ...mapState('card', ['monsterCollection'])
  },
  watch: {
    inputMonster () {
      if (this.inputMonster > 934) {
        this.inputMonster = 0
      }
    }
  },
  created () {
    if (this.monsterCollection !== 0) {
      this.inputMonster = this.monsterCollection
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setMonster () {
      this.SET_CARD({ key: 'monsterCollection', value: this.inputMonster })
    },
    numbersOnly (evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.monster-collection {
  margin-bottom: 15px;
}

.monster-collection > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
}

label {
  color: #fff;
}
input {
  width: 180px;
}
</style>
