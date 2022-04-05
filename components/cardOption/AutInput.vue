<template>
  <div class="aut-input">
    <label>真實符文：</label>
    <input
      v-model.number="inputAut"
      type="number"
      min="0"
      max="350"
      step="1"
      :disabled="level < 260"
      @keypress="numbersOnly"
      @keyup="setAut"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputAut: 0
    }
  },
  computed: {
    ...mapState('card', ['level', 'aut'])
  },
  watch: {
    inputAut () {
      if (this.inputAut > 350) {
        this.inputAut = 0
      }
    }
  },
  created () {
    if (this.aut !== 0) {
      this.inputAut = this.aut
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setAut () {
      this.SET_CARD({ key: 'aut', value: this.inputAut })
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

input[type='disabled'] {
  cursor: not-allowed;
}

input[type='number'] {
  -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.aut-input {
  margin-bottom: 15px;
}

.aut-input > * {
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
