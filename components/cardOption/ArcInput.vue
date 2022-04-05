<template>
  <div class="arc-input">
    <label>祕法符文：</label>
    <input
      v-model.number="inputArc"
      type="number"
      min="0"
      max="1425"
      step="1"
      :disabled="level < 200"
      @keypress="numbersOnly"
      @keyup="setArc"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      inputArc: 0
    }
  },
  computed: {
    ...mapState('card', ['level', 'arc'])
  },
  watch: {
    inputArc () {
      if (this.inputArc > 1425) {
        this.inputArc = 0
      }
    }
  },
  created () {
    if (this.arc !== 0) {
      this.inputArc = this.arc
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    setArc () {
      this.SET_CARD({ key: 'arc', value: this.inputArc })
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

.arc-input {
  margin-bottom: 15px;
}

.arc-input > * {
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
