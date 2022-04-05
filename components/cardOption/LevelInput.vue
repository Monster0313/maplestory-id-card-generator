<template>
  <div class="level-input">
    <label>角色等級：</label>
    <input
      v-model.number="inputLevel"
      type="number"
      min="1"
      max="300"
      step="1"
      required
      @keypress="numbersOnly"
      @keyup="setLevel"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputLevel: 10
    }
  },
  computed: {
    ...mapState('card', ['level'])
  },
  watch: {
    inputLevel () {
      if (this.inputLevel > 300) {
        this.inputLevel = 10
      }
    }
  },
  created () {
    if (this.level !== 10) {
      this.inputLevel = this.level
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setLevel () {
      this.SET_CARD({ key: 'level', value: this.inputLevel })
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

.level-input {
  margin-bottom: 15px;
}

.level-input > * {
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
